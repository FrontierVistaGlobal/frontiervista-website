// Quick script to check Contentful content types
// Run with: node scripts/check-contentful.js

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

async function checkContentful() {
  try {
    console.log('🔍 Checking Contentful space...\n');
    
    // Get all content types
    const contentTypes = await client.getContentTypes();
    console.log(`📋 Found ${contentTypes.items.length} content type(s):\n`);
    
    if (contentTypes.items.length === 0) {
      console.log('❌ No content types found. You need to create a "Blog Post" content type in Contentful.');
      return;
    }
    
    contentTypes.items.forEach((ct, index) => {
      console.log(`${index + 1}. ${ct.name} (API ID: ${ct.sys.id})`);
      console.log(`   Fields: ${ct.fields.map(f => f.id).join(', ')}\n`);
    });
    
    // Check if blogPost exists
    const blogPostExists = contentTypes.items.some(ct => ct.sys.id === 'blogPost');
    
    if (!blogPostExists) {
      console.log('⚠️  "blogPost" content type not found!');
      console.log('   You need to create a content type with API ID "blogPost"');
      console.log('   Or set CONTENTFUL_BLOG_CONTENT_TYPE in .env.local to use an existing one.\n');
    } else {
      console.log('✅ "blogPost" content type found!');
      
      // Try to get entries
      try {
        const entries = await client.getEntries({ content_type: 'blogPost' });
        console.log(`📝 Found ${entries.items.length} blog post(s)`);
      } catch (err) {
        console.log('⚠️  Error fetching entries:', err.message);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.message.includes('space')) {
      console.error('   Check your CONTENTFUL_SPACE_ID in .env.local');
    }
    if (error.message.includes('token') || error.message.includes('unauthorized')) {
      console.error('   Check your CONTENTFUL_ACCESS_TOKEN in .env.local');
    }
  }
}

checkContentful();
