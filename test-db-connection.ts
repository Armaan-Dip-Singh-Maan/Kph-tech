import "dotenv/config";
import { PrismaClient } from "@prisma/client";

function parseDatabaseUrl(url: string) {
  try {
    const match = url.match(/mysql:\/\/([^:]+):([^@]+)@([^\/]+)\/(.+)/);
    if (match) {
      return {
        username: match[1],
        password: match[2],
        host: match[3],
        database: match[4],
      };
    }
  } catch (e) {
    return null;
  }
  return null;
}

async function testConnection() {
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    console.error("❌ DATABASE_URL is not set in .env file");
    return;
  }
  
  console.log("Testing database connection...");
  console.log("DATABASE_URL:", dbUrl.replace(/:[^:@]+@/, ":****@"));
  
  // Parse and validate URL format
  const parsed = parseDatabaseUrl(dbUrl);
  if (parsed) {
    console.log("\n📋 Parsed connection details:");
    console.log("   Username:", parsed.username);
    console.log("   Host:", parsed.host);
    console.log("   Database:", parsed.database);
    console.log("   Password:", "****");
    
    // Check if username matches expected format
    if (parsed.username === "u408069121_kt_admin") {
      console.log("\n⚠️  Warning: Username is 'u408069121_kt_admin'");
      console.log("   According to HOSTINGER-MIGRATE.md, it should be 'u408069121_kt_prod'");
    }
  }
  
  const prisma = new PrismaClient();
  
  try {
    // Try to connect and run a simple query
    await prisma.$connect();
    console.log("\n✅ Successfully connected to database!");
    
    // Try a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Query test successful:", result);
    
    // Try to check if we can access the database
    const dbName = await prisma.$queryRaw`SELECT DATABASE() as db_name`;
    console.log("✅ Current database:", dbName);
    
    // Try to check current user
    const currentUser = await prisma.$queryRaw`SELECT USER() as current_user`;
    console.log("✅ Current user:", currentUser);
    
  } catch (error: any) {
    console.error("\n❌ Connection failed!");
    console.error("Error code:", error.code || "N/A");
    console.error("Error message:", error.message);
    
    if (error.code === "P1000" || error.message?.includes("Authentication failed")) {
      console.error("\n💡 This is an authentication error. Check:");
      console.error("   1. Username is correct (should be 'u408069121_kt_prod' not 'u408069121_kt_admin')");
      console.error("   2. Password is correct");
      console.error("   3. Password special characters are URL-encoded:");
      console.error("      - @ → %40");
      console.error("      - # → %23");
      console.error("      - % → %25");
      console.error("      - ? → %3F");
    } else if (error.code === "P1001" || error.message?.includes("Can't reach")) {
      console.error("\n💡 Cannot reach database server. Check:");
      console.error("   - Hostname/IP is correct (srv1439.hstgr.io or 193.203.166.175)");
      console.error("   - Port is correct (default MySQL port is 3306)");
      console.error("   - Firewall/network allows connection");
    }
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
