'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [activeTab, setActiveTab] = useState<'workshops' | 'examples' | 'artists' | 'journal' | 'about' | 'bookings'>('workshops');
  const [error, setError] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setIsAuthenticated(true);
        localStorage.setItem('adminToken', data.token);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Login failed');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setToken('');
    localStorage.removeItem('adminToken');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F0EEDE] noise-bg flex items-center justify-center">
        <Navigation />
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-serif font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#c4342e]"
                required
              />
            </div>
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-[#c4342e] text-white py-2 px-4 rounded hover:opacity-80 transition-opacity"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F0EEDE] noise-bg">
      <Navigation />

      <div className="pt-24 px-12 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif font-bold">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 flex gap-4 border-b border-gray-300">
          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-6 py-3 ${activeTab === 'workshops' ? 'border-b-2 border-[#c4342e] text-[#c4342e]' : 'text-gray-600'}`}
          >
            Workshops
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`px-6 py-3 ${activeTab === 'examples' ? 'border-b-2 border-[#c4342e] text-[#c4342e]' : 'text-gray-600'}`}
          >
            Examples
          </button>
          <button
            onClick={() => setActiveTab('artists')}
            className={`px-6 py-3 ${activeTab === 'artists' ? 'border-b-2 border-[#c4342e] text-[#c4342e]' : 'text-gray-600'}`}
          >
            Artists
          </button>
          <button
            onClick={() => setActiveTab('journal')}
            className={`px-6 py-3 ${activeTab === 'journal' ? 'border-b-2 border-[#c4342e] text-[#c4342e]' : 'text-gray-600'}`}
          >
            Journal
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 ${activeTab === 'about' ? 'border-b-2 border-[#c4342e] text-[#c4342e]' : 'text-gray-600'}`}
          >
            About Content
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-6 py-3 ${activeTab === 'bookings' ? 'border-b-2 border-[#c4342e] text-[#c4342e]' : 'text-gray-600'}`}
          >
            Booking Requests
          </button>
        </div>

        <div className="bg-white p-8 rounded-lg shadow">
          {activeTab === 'workshops' && <WorkshopsManager token={token} />}
          {activeTab === 'examples' && <ExamplesManager token={token} />}
          {activeTab === 'artists' && <ArtistsManager token={token} />}
          {activeTab === 'journal' && <JournalManager token={token} />}
          {activeTab === 'about' && <AboutManager token={token} />}
          {activeTab === 'bookings' && <BookingsManager token={token} />}
        </div>
      </div>
    </div>
  );
}

function WorkshopsManager({ token }: { token: string }) {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    date: '',
    location: '',
    image_url: '',
    is_upcoming: true,
  });

  useEffect(() => {
    fetchWorkshops();
  }, []);

  const fetchWorkshops = async () => {
    const res = await fetch('/api/workshops?published=false');
    const data = await res.json();
    setWorkshops(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editing ? 'PUT' : 'POST';
    const body = editing ? { ...formData, id: editing.id } : formData;

    await fetch('/api/workshops', {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    setFormData({ title: '', slug: '', description: '', date: '', location: '', image_url: '', is_upcoming: true });
    setEditing(null);
    fetchWorkshops();
  };

  const handleEdit = (workshop: any) => {
    setEditing(workshop);
    setFormData({
      title: workshop.title,
      slug: workshop.slug,
      description: workshop.description,
      date: workshop.date,
      location: workshop.location,
      image_url: workshop.image_url || '',
      is_upcoming: workshop.is_upcoming === 1,
    });
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this workshop?')) {
      await fetch(`/api/workshops?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchWorkshops();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">
        {editing ? 'Edit Workshop' : 'Add New Workshop'}
      </h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              if (!editing) {
                setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) });
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug (URL)</label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_upcoming"
            checked={formData.is_upcoming}
            onChange={(e) => setFormData({ ...formData, is_upcoming: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="is_upcoming" className="text-sm font-medium">Mark as upcoming workshop</label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#c4342e] text-white rounded hover:opacity-80"
          >
            {editing ? 'Update' : 'Create'}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setFormData({ title: '', slug: '', description: '', date: '', location: '', image_url: '', is_upcoming: true });
              }}
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-serif font-bold mb-4">Existing Workshops</h3>
      <div className="space-y-4">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="border border-gray-300 p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{workshop.title}</h4>
                <p className="text-sm text-gray-600">{workshop.date} • {workshop.location}</p>
                <p className="mt-2">{workshop.description}</p>
                {workshop.is_upcoming === 1 ? (
                  <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Upcoming</span>
                ) : (
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-200 text-xs rounded">Past</span>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(workshop)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(workshop.id)}
                  className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExamplesManager({ token }: { token: string }) {
  const [examples, setExamples] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    image_url: '',
    gallery_images: [] as string[],
  });

  useEffect(() => {
    fetchExamples();
  }, []);

  const fetchExamples = async () => {
    const res = await fetch('/api/workshop-examples');
    const data = await res.json();
    setExamples(data);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editing ? 'PUT' : 'POST';
    const body = editing ? { ...formData, id: editing.id } : formData;

    await fetch('/api/workshop-examples', {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    setFormData({ title: '', slug: '', description: '', image_url: '', gallery_images: [] });
    setEditing(null);
    fetchExamples();
  };

  const handleEdit = (example: any) => {
    setEditing(example);
    setFormData({
      title: example.title,
      slug: example.slug,
      description: example.description,
      image_url: example.image_url || '',
      gallery_images: example.gallery_images ? JSON.parse(example.gallery_images) : [],
    });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this example?')) {
      await fetch(`/api/workshop-examples?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchExamples();
    }
  };

  const addGalleryImage = () => {
    setFormData({ ...formData, gallery_images: [...formData.gallery_images, ''] });
  };

  const updateGalleryImage = (index: number, value: string) => {
    const updated = [...formData.gallery_images];
    updated[index] = value;
    setFormData({ ...formData, gallery_images: updated });
  };

  const removeGalleryImage = (index: number) => {
    const updated = formData.gallery_images.filter((_, i) => i !== index);
    setFormData({ ...formData, gallery_images: updated });
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">
        {editing ? 'Edit Workshop Example' : 'Add New Workshop Example'}
      </h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              if (!editing) {
                setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) });
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug (URL)</label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Hero Image URL</label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Gallery Images</label>
          {formData.gallery_images.map((url, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="url"
                value={url}
                onChange={(e) => updateGalleryImage(index, e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded"
                placeholder="Image URL"
              />
              <button
                type="button"
                onClick={() => removeGalleryImage(index)}
                className="px-3 py-2 border border-red-300 text-red-600 rounded hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addGalleryImage}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
          >
            + Add Gallery Image
          </button>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#c4342e] text-white rounded hover:opacity-80"
          >
            {editing ? 'Update' : 'Create'}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setFormData({ title: '', slug: '', description: '', image_url: '', gallery_images: [] });
              }}
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-serif font-bold mb-4">Existing Examples</h3>
      <div className="space-y-4">
        {examples.map((example) => (
          <div key={example.id} className="border border-gray-300 p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{example.title}</h4>
                <p className="text-sm text-gray-600">/{example.slug}</p>
                <p className="mt-2 text-sm">{example.description.substring(0, 150)}...</p>
                {example.gallery_images && (
                  <p className="text-xs text-gray-500 mt-2">
                    {JSON.parse(example.gallery_images).length} gallery images
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(example)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(example.id)}
                  className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtistsManager({ token }: { token: string }) {
  const [artists, setArtists] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);
  const [artworks, setArtworks] = useState<any[]>([]);
  const [editingArtwork, setEditingArtwork] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    bio: '',
    profile_image_url: '',
    website: '',
    instagram: '',
    twitter: '',
    email: '',
  });
  const [artworkFormData, setArtworkFormData] = useState({
    title: '',
    description: '',
    image_url: '',
    year: '',
    medium: '',
    dimensions: '',
  });

  useEffect(() => {
    fetchArtists();
  }, []);

  useEffect(() => {
    if (selectedArtist) {
      fetchArtworks(selectedArtist);
    }
  }, [selectedArtist]);

  const fetchArtists = async () => {
    const res = await fetch('/api/artists');
    const data = await res.json();
    setArtists(data);
  };

  const fetchArtworks = async (artistId: number) => {
    const res = await fetch(`/api/artworks?artist_id=${artistId}`);
    const data = await res.json();
    setArtworks(data);
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? 'PUT' : 'POST';
    const body = editing ? { ...formData, id: editing.id } : formData;

    await fetch('/api/artists', {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    setFormData({ name: '', slug: '', bio: '', profile_image_url: '', website: '', instagram: '', twitter: '', email: '' });
    setEditing(null);
    fetchArtists();
  };

  const handleArtworkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedArtist) return;

    const method = editingArtwork ? 'PUT' : 'POST';
    const body = editingArtwork
      ? { ...artworkFormData, id: editingArtwork.id }
      : { ...artworkFormData, artist_id: selectedArtist };

    await fetch('/api/artworks', {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    setArtworkFormData({ title: '', description: '', image_url: '', year: '', medium: '', dimensions: '' });
    setEditingArtwork(null);
    fetchArtworks(selectedArtist);
  };

  const handleEdit = (artist: any) => {
    setEditing(artist);
    setFormData({
      name: artist.name,
      slug: artist.slug,
      bio: artist.bio,
      profile_image_url: artist.profile_image_url || '',
      website: artist.website || '',
      instagram: artist.instagram || '',
      twitter: artist.twitter || '',
      email: artist.email || '',
    });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this artist? This will also delete all their artworks.')) {
      await fetch(`/api/artists?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchArtists();
      if (selectedArtist === id) {
        setSelectedArtist(null);
      }
    }
  };

  const handleEditArtwork = (artwork: any) => {
    setEditingArtwork(artwork);
    setArtworkFormData({
      title: artwork.title,
      description: artwork.description || '',
      image_url: artwork.image_url,
      year: artwork.year || '',
      medium: artwork.medium || '',
      dimensions: artwork.dimensions || '',
    });
  };

  const handleDeleteArtwork = async (id: number) => {
    if (confirm('Are you sure you want to delete this artwork?')) {
      await fetch(`/api/artworks?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (selectedArtist) {
        fetchArtworks(selectedArtist);
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">
        {editing ? 'Edit Artist' : 'Add New Artist'}
      </h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (!editing) {
                setFormData({ ...formData, name: e.target.value, slug: generateSlug(e.target.value) });
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug (URL)</label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image URL</label>
            <input
              type="url"
              value={formData.profile_image_url}
              onChange={(e) => setFormData({ ...formData, profile_image_url: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Website</label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Instagram</label>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="@username or URL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Twitter</label>
            <input
              type="text"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="@username or URL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#c4342e] text-white rounded hover:opacity-80"
          >
            {editing ? 'Update' : 'Create'}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setFormData({ name: '', slug: '', bio: '', profile_image_url: '', website: '', instagram: '', twitter: '', email: '' });
              }}
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-serif font-bold mb-4">Existing Artists</h3>
      <div className="space-y-4 mb-8">
        {artists.map((artist) => (
          <div key={artist.id} className="border border-gray-300 p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{artist.name}</h4>
                <p className="text-sm text-gray-600">/{artist.slug}</p>
                <p className="mt-2 text-sm">{artist.bio.substring(0, 150)}...</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedArtist(artist.id)}
                  className="px-3 py-1 text-sm border border-blue-300 text-blue-600 rounded hover:bg-blue-50"
                >
                  Artworks
                </button>
                <button
                  onClick={() => handleEdit(artist)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(artist.id)}
                  className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Artworks Section */}
      {selectedArtist && (
        <div className="border-t pt-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-serif font-bold">
              Manage Artworks for {artists.find(a => a.id === selectedArtist)?.name}
            </h3>
            <button
              onClick={() => setSelectedArtist(null)}
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
            >
              Close
            </button>
          </div>

          <form onSubmit={handleArtworkSubmit} className="mb-6 space-y-4 bg-gray-50 p-6 rounded">
            <h4 className="font-bold">{editingArtwork ? 'Edit Artwork' : 'Add New Artwork'}</h4>

            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                value={artworkFormData.title}
                onChange={(e) => setArtworkFormData({ ...artworkFormData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                type="url"
                value={artworkFormData.image_url}
                onChange={(e) => setArtworkFormData({ ...artworkFormData, image_url: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <input
                  type="text"
                  value={artworkFormData.year}
                  onChange={(e) => setArtworkFormData({ ...artworkFormData, year: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Medium</label>
                <input
                  type="text"
                  value={artworkFormData.medium}
                  onChange={(e) => setArtworkFormData({ ...artworkFormData, medium: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Dimensions</label>
                <input
                  type="text"
                  value={artworkFormData.dimensions}
                  onChange={(e) => setArtworkFormData({ ...artworkFormData, dimensions: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={artworkFormData.description}
                onChange={(e) => setArtworkFormData({ ...artworkFormData, description: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded h-20"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-[#c4342e] text-white rounded hover:opacity-80"
              >
                {editingArtwork ? 'Update' : 'Add'} Artwork
              </button>
              {editingArtwork && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingArtwork(null);
                    setArtworkFormData({ title: '', description: '', image_url: '', year: '', medium: '', dimensions: '' });
                  }}
                  className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="space-y-3">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="border border-gray-300 p-3 rounded flex items-center gap-4">
                {artwork.image_url && (
                  <img src={artwork.image_url} alt={artwork.title} className="w-20 h-20 object-cover rounded" />
                )}
                <div className="flex-1">
                  <h5 className="font-bold">{artwork.title}</h5>
                  <p className="text-xs text-gray-600">
                    {[artwork.year, artwork.medium, artwork.dimensions].filter(Boolean).join(' • ')}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditArtwork(artwork)}
                    className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteArtwork(artwork.id)}
                    className="px-2 py-1 text-xs border border-red-300 text-red-600 rounded hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {artworks.length === 0 && (
              <p className="text-gray-600 text-sm">No artworks yet. Add one above.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function JournalManager({ token }: { token: string }) {
  const [entries, setEntries] = useState<any[]>([]);
  const [editing, setEditing] = useState<any>(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    image_url: '',
    published: false,
  });

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const res = await fetch('/api/journal?published=false');
    const data = await res.json();
    setEntries(data);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const method = editing ? 'PUT' : 'POST';
    const body = editing ? { ...formData, id: editing.id } : formData;

    await fetch('/api/journal', {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    setFormData({ title: '', slug: '', content: '', excerpt: '', image_url: '', published: false });
    setEditing(null);
    fetchEntries();
  };

  const handleEdit = (entry: any) => {
    setEditing(entry);
    setFormData({
      title: entry.title,
      slug: entry.slug,
      content: entry.content,
      excerpt: entry.excerpt || '',
      image_url: entry.image_url || '',
      published: entry.published === 1,
    });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this journal entry?')) {
      await fetch(`/api/journal?id=${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      fetchEntries();
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">
        {editing ? 'Edit Journal Entry' : 'Add New Journal Entry'}
      </h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => {
              setFormData({ ...formData, title: e.target.value });
              if (!editing) {
                setFormData({ ...formData, title: e.target.value, slug: generateSlug(e.target.value) });
              }
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Slug (URL)</label>
          <input
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content (Markdown supported)</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded h-64 font-mono text-sm"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Excerpt</label>
          <textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded h-24"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="published"
            checked={formData.published}
            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="published" className="text-sm font-medium">Publish</label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2 bg-[#c4342e] text-white rounded hover:opacity-80"
          >
            {editing ? 'Update' : 'Create'}
          </button>
          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(null);
                setFormData({ title: '', slug: '', content: '', excerpt: '', image_url: '', published: false });
              }}
              className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <h3 className="text-xl font-serif font-bold mb-4">Existing Entries</h3>
      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="border border-gray-300 p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-lg">{entry.title}</h4>
                <p className="text-sm text-gray-600">/{entry.slug}</p>
                <p className="mt-2 text-sm">{entry.excerpt || entry.content.substring(0, 150)}...</p>
                <div className="mt-2 flex gap-2">
                  {entry.published === 1 ? (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Published</span>
                  ) : (
                    <span className="px-2 py-1 bg-gray-200 text-xs rounded">Draft</span>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(entry)}
                  className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(entry.id)}
                  className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutManager({ token }: { token: string }) {
  const [content, setContent] = useState<any[]>([]);
  const [formData, setFormData] = useState({ section: '', content: '' });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const res = await fetch('/api/about');
    const data = await res.json();
    setContent(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/about', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    setFormData({ section: '', content: '' });
    fetchContent();
  };

  const handleEdit = (item: any) => {
    setFormData({ section: item.section, content: item.content });
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">Manage About Content</h2>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Section Name</label>
          <input
            type="text"
            value={formData.section}
            onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="e.g., hero, mission, team"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content (Markdown supported)</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded h-48 font-mono text-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-[#c4342e] text-white rounded hover:opacity-80"
        >
          Save Section
        </button>
      </form>

      <h3 className="text-xl font-serif font-bold mb-4">Existing Sections</h3>
      <div className="space-y-4">
        {content.map((item) => (
          <div key={item.id} className="border border-gray-300 p-4 rounded">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="font-bold text-lg capitalize">{item.section}</h4>
                <p className="mt-2 text-sm whitespace-pre-wrap">{item.content.substring(0, 200)}...</p>
                <p className="text-xs text-gray-500 mt-2">Last updated: {new Date(item.updated_at).toLocaleString()}</p>
              </div>
              <button
                onClick={() => handleEdit(item)}
                className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 ml-4"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BookingsManager({ token }: { token: string }) {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await fetch('/api/bookings', {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await res.json();
    setBookings(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold mb-6">Booking Requests</h2>

      <div className="space-y-4">
        {bookings.length === 0 ? (
          <p className="text-gray-600">No booking requests yet.</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="border border-gray-300 p-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold">{booking.name}</p>
                  <p className="text-sm text-gray-600">{booking.email}</p>
                  {booking.phone && <p className="text-sm text-gray-600">{booking.phone}</p>}
                </div>
                <div className="text-right text-sm text-gray-500">
                  {new Date(booking.created_at).toLocaleString()}
                </div>
              </div>
              <p className="mt-4 text-sm whitespace-pre-wrap">{booking.message}</p>
              {booking.workshop_id && (
                <p className="mt-2 text-xs text-gray-500">Workshop ID: {booking.workshop_id}</p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
