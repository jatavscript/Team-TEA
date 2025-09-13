import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const cities = [
  "Gangtok", "Namchi", "Pelling", "Ravangla", "Yuksom", "Other"
];

const SurveyForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    email: "",
    city: "",
    visited: "",
    experience: "",
    suggestions: "",
    rating: 0,
  });
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRating = (rate: number) => {
    setForm({ ...form, rating: rate });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: send data to backend or API
  };

  return (
    <section className="py-8 bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg px-10 py-6 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-orange-700 mb-1 text-center">Sikkim Tourism Survey</h2>
        <p className="text-gray-600 mb-4 text-center">Help us improve your experience! Please fill out this quick survey.</p>
        {submitted ? (
          <div className="text-center text-green-600 text-lg font-semibold">Thank you for your feedback!</div>
        ) : (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-x-8 gap-y-4 mb-4">
            <div>
              <label className="block font-semibold mb-1">Name<span className="text-red-500">*</span></label>
              <Input name="name" required value={form.name} onChange={handleChange} placeholder="Your Name" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Phone No.</label>
              <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Age</label>
              <Input name="age" type="number" min="1" value={form.age} onChange={handleChange} placeholder="Age" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email ID</label>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" />
            </div>
            <div>
              <label className="block font-semibold mb-1">City/State</label>
              <Input name="city" value={form.city} onChange={handleChange} placeholder="City or State" list="cities" />
              <datalist id="cities">
                {cities.map((city) => (
                  <option key={city} value={city} />
                ))}
              </datalist>
            </div>
            <div>
              <label className="block font-semibold mb-1">Visited Places/Monasteries<span className="text-red-500">*</span></label>
              <Input name="visited" required value={form.visited} onChange={handleChange} placeholder="e.g. Rumtek, Pemayangtse, etc." />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">Tell us about your experience</label>
              <Textarea name="experience" rows={2} value={form.experience} onChange={handleChange} placeholder="Share your experience..." />
            </div>
            <div>
              <label className="block font-semibold mb-1">Any Suggestions</label>
              <Textarea name="suggestions" rows={2} value={form.suggestions} onChange={handleChange} placeholder="Your suggestions..." />
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 mb-2">
            <div className="flex items-center">
              <label className="block font-semibold mr-3">Rate your experience</label>
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map((star) => (
                  <svg
                    key={star}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => handleRating(star)}
                    className={`h-7 w-7 cursor-pointer transition-colors ${star <= (hovered || form.rating) ? 'text-amber-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">{form.rating > 0 ? `${form.rating}/5` : "Not rated"}</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-lg px-8 py-2 rounded-lg ml-4" type="submit">Submit</Button>
          </div>
        </form>
        )}
      </div>
    </section>
  );
};

export default SurveyForm;
