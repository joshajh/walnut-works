import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'walnut-works.db');
const db = new Database(dbPath);

// Initialize database tables first
db.exec(`
  CREATE TABLE IF NOT EXISTS workshops (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    date TEXT,
    location TEXT,
    image_url TEXT,
    is_upcoming BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS workshop_examples (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    gallery_images TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS journal_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    image_url TEXT,
    published BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS about_content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    section TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS booking_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT,
    workshop_id INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    bio TEXT NOT NULL,
    profile_image_url TEXT,
    website TEXT,
    instagram TEXT,
    twitter TEXT,
    email TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS artworks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    artist_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    image_url TEXT NOT NULL,
    year TEXT,
    medium TEXT,
    dimensions TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (artist_id) REFERENCES artists (id) ON DELETE CASCADE
  );
`);

console.log('Seeding database...');

// Seed Workshop Examples
const exampleStmt = db.prepare(
  'INSERT INTO workshop_examples (title, slug, description, image_url, gallery_images) VALUES (?, ?, ?, ?, ?)'
);

const examples = [
  {
    title: 'Bronze Casting Fundamentals',
    slug: 'bronze-casting-fundamentals',
    description: `Learn the ancient art of bronze casting in our comprehensive workshop. Students explore the entire process from creating wax models to pouring molten bronze.

This hands-on experience covers mould-making techniques, understanding metal properties, and finishing methods. Participants leave with their own small bronze piece and the knowledge to continue their practice.

Perfect for artists, sculptors, and anyone interested in traditional metalworking techniques. No prior experience necessary.`,
    image_url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=800&fit=crop',
    gallery_images: JSON.stringify([
      'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop'
    ])
  },
  {
    title: 'Lost Wax Technique',
    slug: 'lost-wax-technique',
    description: `Delve deep into the lost wax casting method, one of the most versatile and ancient metalworking techniques known to civilization.

In this intensive workshop, participants create intricate wax models, build ceramic shell moulds, and pour bronze to create detailed sculptures. We cover both traditional and contemporary approaches to this timeless craft.

This workshop is ideal for intermediate makers looking to expand their sculptural metalwork skills. Some experience with sculpture or metalwork is recommended but not required.`,
    image_url: 'https://images.unsplash.com/photo-1581093458791-9d42bbf6b9e1?w=1200&h=800&fit=crop',
    gallery_images: JSON.stringify([
      'https://images.unsplash.com/photo-1581092583537-20d51876f1e4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop'
    ])
  },
  {
    title: 'Patination & Finishing',
    slug: 'patination-finishing',
    description: `Transform raw bronze into stunning finished pieces through the art of patination and metal finishing. This specialized workshop focuses on the final stages of bronze work.

Students learn to apply various patinas using traditional chemicals and heat, creating colours ranging from rich browns to vibrant greens and blues. We also cover polishing, waxing, and protective treatments.

Essential for anyone working with bronze or other metals who wants to achieve professional-quality finishes. This workshop can be taken as a standalone or as a follow-up to casting workshops.`,
    image_url: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&h=800&fit=crop',
    gallery_images: JSON.stringify([
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581093458791-9d42bbf6b9e1?w=800&h=600&fit=crop'
    ])
  }
];

for (const example of examples) {
  try {
    exampleStmt.run(
      example.title,
      example.slug,
      example.description,
      example.image_url,
      example.gallery_images
    );
    console.log(`✓ Added example: ${example.title}`);
  } catch (error) {
    console.log(`  Skipped example: ${example.title} (already exists)`);
  }
}

// Seed Upcoming Workshops
const workshopStmt = db.prepare(
  'INSERT INTO workshops (title, slug, description, date, location, image_url, is_upcoming) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

// Calculate dates for upcoming workshops
const today = new Date();
const twoWeeksOut = new Date(today);
twoWeeksOut.setDate(today.getDate() + 14);

const oneMonthOut = new Date(today);
oneMonthOut.setMonth(today.getMonth() + 1);

const twoMonthsOut = new Date(today);
twoMonthsOut.setMonth(today.getMonth() + 2);

const workshops = [
  {
    title: 'Introduction to Bronze Casting',
    slug: 'introduction-bronze-casting-spring-2025',
    description: `Join us for a weekend intensive exploring the fundamentals of bronze casting. This beginner-friendly workshop covers the complete casting process from start to finish.

Over two days, participants will create small bronze sculptures using the lost wax method. All materials and tools are provided, and you'll take home your finished piece.

Limited to 8 participants to ensure individual attention. No experience necessary.`,
    date: twoWeeksOut.toISOString().split('T')[0],
    location: 'Butley Mills Studio, Suffolk',
    image_url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop',
    is_upcoming: 1
  },
  {
    title: 'Advanced Casting Techniques',
    slug: 'advanced-casting-techniques-april-2025',
    description: `An intensive three-day workshop for experienced makers looking to refine their bronze casting skills and explore advanced techniques.

We'll cover complex mould-making, large-scale casting considerations, and troubleshooting common challenges. Participants should have basic casting experience.

This workshop includes demonstrations of industrial casting methods alongside traditional approaches. Bring your own designs or work with provided patterns.`,
    date: oneMonthOut.toISOString().split('T')[0],
    location: 'Butley Mills Studio, Suffolk',
    image_url: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&h=800&fit=crop',
    is_upcoming: 1
  },
  {
    title: 'Sculptural Metalwork Summer Course',
    slug: 'sculptural-metalwork-summer-2025',
    description: `A week-long immersive course in sculptural bronze work, perfect for artists wanting to develop a body of work or learn new skills in a supportive environment.

Participants will complete multiple pieces using various casting and fabrication techniques. The course includes daily demonstrations, individual tutorials, and group critiques.

Studio access from 9am-6pm daily with evening demonstrations. Accommodation recommendations available for non-local participants. All skill levels welcome.`,
    date: twoMonthsOut.toISOString().split('T')[0],
    location: 'Butley Mills Studio, Suffolk',
    image_url: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&h=800&fit=crop',
    is_upcoming: 1
  }
];

for (const workshop of workshops) {
  try {
    workshopStmt.run(
      workshop.title,
      workshop.slug,
      workshop.description,
      workshop.date,
      workshop.location,
      workshop.image_url,
      workshop.is_upcoming
    );
    console.log(`✓ Added workshop: ${workshop.title}`);
  } catch (error) {
    console.log(`  Skipped workshop: ${workshop.title} (already exists)`);
  }
}

// Seed Artists
const artistStmt = db.prepare(
  'INSERT INTO artists (name, slug, bio, profile_image_url, website, instagram, email) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

const artists = [
  {
    name: 'Denise de Cordova',
    slug: 'denise-de-cordova',
    bio: `Denise de Cordova is a sculptor and bronze artist whose work explores the intersection of natural forms and human emotion. Working primarily in bronze, her pieces capture moments of transformation and growth.

With over twenty years of experience in bronze casting, Denise has developed a unique approach that combines traditional lost wax techniques with contemporary aesthetic sensibilities. Her work has been exhibited throughout the UK and is held in private collections internationally.

Based in Suffolk, Denise maintains a studio practice at Walnut Works where she continues to push the boundaries of sculptural bronze work while mentoring emerging artists in traditional casting methods.`,
    profile_image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop',
    website: 'https://denisedecordova.com',
    instagram: 'denisedecordova_art',
    email: 'denise@walnutworks.com'
  },
  {
    name: 'Clare Jarrett',
    slug: 'clare-jarrett',
    bio: `Clare Jarrett creates intricate bronze sculptures that celebrate the beauty of the natural world. Her work often features botanical subjects, capturing the delicate structures of plants and flowers in enduring metal.

A trained botanist before turning to sculpture, Clare brings a deep understanding of plant anatomy to her artistic practice. This unique background informs every piece she creates, resulting in work that is both scientifically accurate and artistically compelling.

Clare's sculptures have been featured in numerous exhibitions and garden settings across the UK. She is particularly known for her public commissions and her ability to create work that enhances outdoor spaces while withstanding the elements.`,
    profile_image_url: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&h=800&fit=crop',
    website: null,
    instagram: 'clarejarrett_bronze',
    email: 'clare@walnutworks.com'
  },
  {
    name: 'Juliette Lockhart',
    slug: 'juliette-lockhart',
    bio: `Juliette Lockhart is a contemporary sculptor working primarily in bronze, creating pieces that explore themes of memory, place, and personal narrative. Her work often incorporates found objects and personal artifacts cast in bronze.

Trained at the Royal College of Art, Juliette has exhibited widely in galleries and museums throughout Europe. Her practice is characterized by meticulous attention to detail and a deep engagement with the materiality of bronze as both medium and metaphor.

At Walnut Works, Juliette divides her time between her own creative practice and teaching, sharing her expertise in advanced casting techniques with students and fellow artists. Her work is held in several public collections including the V&A Museum.`,
    profile_image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop',
    website: 'https://juliettelockhart.co.uk',
    instagram: 'juliette.lockhart',
    email: 'juliette@walnutworks.com'
  },
  {
    name: 'Laura Wilson',
    slug: 'laura-wilson',
    bio: `Laura Wilson creates powerful figurative sculptures in bronze, exploring the human form through a contemporary lens. Her work examines themes of identity, strength, and vulnerability, often depicting figures in moments of quiet contemplation or dynamic movement.

Laura's approach to bronze casting emphasizes the importance of surface texture and patination, using these elements to enhance the emotional resonance of her work. She is particularly skilled in creating complex patinas that add depth and character to her sculptures.

A graduate of the Slade School of Fine Art, Laura has received numerous awards for her sculptural work. She maintains an active exhibition schedule while working from her studio at Walnut Works, where she continues to develop new bodies of work and collaborate with other resident artists.`,
    profile_image_url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=800&fit=crop',
    website: 'https://laurawilsonsculpture.com',
    instagram: 'laurawilson_sculpture',
    email: 'laura@walnutworks.com'
  }
];

const artistIds: Record<string, number> = {};

for (const artist of artists) {
  try {
    const result = artistStmt.run(
      artist.name,
      artist.slug,
      artist.bio,
      artist.profile_image_url,
      artist.website,
      artist.instagram,
      artist.email
    );
    artistIds[artist.slug] = Number(result.lastInsertRowid);
    console.log(`✓ Added artist: ${artist.name}`);
  } catch (error) {
    console.log(`  Skipped artist: ${artist.name} (already exists)`);
    // Get the existing artist ID
    const existing = db.prepare('SELECT id FROM artists WHERE slug = ?').get(artist.slug) as { id: number };
    artistIds[artist.slug] = existing.id;
  }
}

// Seed Artworks
const artworkStmt = db.prepare(
  'INSERT INTO artworks (artist_id, title, description, image_url, year, medium, dimensions) VALUES (?, ?, ?, ?, ?, ?, ?)'
);

const artworks = [
  // Denise de Cordova artworks
  {
    artistSlug: 'denise-de-cordova',
    title: 'Emergence',
    description: 'A sculpture exploring themes of growth and transformation, capturing the moment a form breaks free from its constraints.',
    image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with dark brown patina',
    dimensions: '45 × 30 × 25 cm'
  },
  {
    artistSlug: 'denise-de-cordova',
    title: 'Tidal Memory',
    description: 'Inspired by coastal landscapes, this piece reflects on the persistent power of water to shape and transform.',
    image_url: 'https://images.unsplash.com/photo-1580274947441-f5db6b5f6e1c?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze with verdigris patina',
    dimensions: '60 × 40 × 30 cm'
  },
  {
    artistSlug: 'denise-de-cordova',
    title: 'Threshold',
    description: 'A meditative piece examining moments of transition and the spaces between states of being.',
    image_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with oxidized finish',
    dimensions: '35 × 35 × 20 cm'
  },
  {
    artistSlug: 'denise-de-cordova',
    title: 'Root System',
    description: 'An exploration of hidden structures and the unseen networks that sustain and connect living things.',
    image_url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze',
    dimensions: '50 × 50 × 15 cm'
  },

  // Clare Jarrett artworks
  {
    artistSlug: 'clare-jarrett',
    title: 'Magnolia Study',
    description: 'A detailed botanical sculpture capturing the elegant form of magnolia flowers at the peak of bloom.',
    image_url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with natural patina',
    dimensions: '40 × 25 × 25 cm'
  },
  {
    artistSlug: 'clare-jarrett',
    title: 'Seed Pods',
    description: 'A collection of bronze seed pods celebrating the diversity and beauty of plant reproductive structures.',
    image_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze with varied patinas',
    dimensions: 'Various dimensions, each approx. 15 × 10 × 10 cm'
  },
  {
    artistSlug: 'clare-jarrett',
    title: 'Fern Unfolding',
    description: 'Capturing the moment of a fern frond unfurling, this piece celebrates the mathematical precision of natural growth patterns.',
    image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with green patina',
    dimensions: '55 × 20 × 15 cm'
  },

  // Juliette Lockhart artworks
  {
    artistSlug: 'juliette-lockhart',
    title: 'Reliquary for Lost Things',
    description: 'A sculptural assemblage incorporating cast everyday objects, exploring themes of memory and the weight of personal history.',
    image_url: 'https://images.unsplash.com/photo-1580274947441-f5db6b5f6e1c?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with found objects',
    dimensions: '70 × 40 × 30 cm'
  },
  {
    artistSlug: 'juliette-lockhart',
    title: 'Archive III',
    description: 'Part of an ongoing series examining how we preserve and lose personal narratives through material objects.',
    image_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze with steel elements',
    dimensions: '80 × 50 × 35 cm'
  },
  {
    artistSlug: 'juliette-lockhart',
    title: 'Domestic Archaeology',
    description: 'Cast fragments of household items arranged to suggest layers of lived experience and accumulated time.',
    image_url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with oxidized patina',
    dimensions: '45 × 60 × 25 cm'
  },
  {
    artistSlug: 'juliette-lockhart',
    title: 'Container',
    description: 'A vessel-like form that explores the relationship between interior and exterior space, holding and release.',
    image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze',
    dimensions: '30 × 30 × 40 cm'
  },

  // Laura Wilson artworks
  {
    artistSlug: 'laura-wilson',
    title: 'Standing Figure',
    description: 'A powerful life-size figure capturing strength and vulnerability in equal measure through posture and surface treatment.',
    image_url: 'https://images.unsplash.com/photo-1580274947441-f5db6b5f6e1c?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with layered patina',
    dimensions: '165 × 40 × 35 cm'
  },
  {
    artistSlug: 'laura-wilson',
    title: 'Contemplation',
    description: 'A seated figure in a moment of quiet reflection, the rich surface patina adding emotional depth to the form.',
    image_url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze with brown and green patina',
    dimensions: '90 × 60 × 50 cm'
  },
  {
    artistSlug: 'laura-wilson',
    title: 'Torso Study',
    description: 'An abstract exploration of the human form, focusing on line, volume, and the play of light on bronze surfaces.',
    image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
    year: '2024',
    medium: 'Bronze with polished finish',
    dimensions: '75 × 35 × 25 cm'
  },
  {
    artistSlug: 'laura-wilson',
    title: 'Movement Series II',
    description: 'Part of a series capturing the body in motion, this piece freezes a moment of dynamic energy and balance.',
    image_url: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=800&fit=crop',
    year: '2023',
    medium: 'Bronze with dark patina',
    dimensions: '85 × 45 × 40 cm'
  }
];

for (const artwork of artworks) {
  try {
    artworkStmt.run(
      artistIds[artwork.artistSlug],
      artwork.title,
      artwork.description,
      artwork.image_url,
      artwork.year,
      artwork.medium,
      artwork.dimensions
    );
    console.log(`✓ Added artwork: ${artwork.title}`);
  } catch (error) {
    console.log(`  Skipped artwork: ${artwork.title} (already exists)`);
  }
}

console.log('\nSeeding complete!');
console.log('\nSummary:');
console.log(`- Workshop Examples: ${examples.length}`);
console.log(`- Upcoming Workshops: ${workshops.length}`);
console.log(`- Artists: ${artists.length}`);
console.log(`- Artworks: ${artworks.length}`);

db.close();
