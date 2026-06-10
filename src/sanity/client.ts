import seedData from './seed.json';

class MockSanityClient {
  async fetch(query: string, params: Record<string, any> = {}): Promise<any> {
    // Basic mock router for GROQ query parameters
    if (query.includes('_type == "service"')) {
      if (query.includes('slug.current ==')) {
        const slug = params.slug;
        const res = seedData.services.find(s => s.slug.current === slug);
        return res ? [res] : [];
      }
      return seedData.services;
    }
    
    if (query.includes('_type == "problem"')) {
      if (query.includes('slug.current ==')) {
        const slug = params.slug;
        const res = seedData.problems.find(p => p.slug.current === slug);
        return res ? [res] : [];
      }
      return seedData.problems;
    }
    
    if (query.includes('_type == "location"')) {
      if (query.includes('slug.current ==')) {
        const slug = params.slug;
        const res = seedData.locations.find(l => l.slug.current === slug);
        return res ? [res] : [];
      }
      return seedData.locations;
    }
    
    if (query.includes('_type == "siteSettings"')) {
      return [seedData.siteSettings];
    }
    
    if (query.includes('_type == "priceItem"')) {
      return seedData.priceItems;
    }
    
    if (query.includes('_type == "work"')) {
      return seedData.works;
    }
    
    if (query.includes('_type == "faq"')) {
      return seedData.faqs;
    }
    
    return [];
  }
}

export const sanityClient = new MockSanityClient();

// Simple mock helper for image transformations
export function urlFor(source: any) {
  return {
    url: () => 'IMAGE_PLACEHOLDER'
  };
}
