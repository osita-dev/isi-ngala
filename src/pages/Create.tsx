import { useState } from "react";
import { Camera, Video, X } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayout } from "@/components/layout/AppLayout";
import { toast } from "sonner";

const MAX_FILE_SIZE_MB = 100;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const Create = () => {
  const [caption, setCaption] = useState("");
  const [hairType, setHairType] = useState("");
  const [tags, setTags] = useState("");
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<"image" | "video" | null>(null);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      toast.error(`File too large! Maximum size is ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }

    const isVideo = file.type.startsWith("video/");
    setMediaType(isVideo ? "video" : "image");

    const reader = new FileReader();
    reader.onloadend = () => setMediaPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!caption.trim()) {
      toast.error("Please write something to share!");
      return;
    }
    toast.success("Post shared! 🎉");
    setCaption("");
    setHairType("");
    setTags("");
    setImagePreview(null);
  };

  return (
    <AppLayout>
      <div className="max-w-lg mx-auto px-4 py-6">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">Create Post</h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-5"
        >
          {/* Upload area (optional) */}
          {imagePreview ? (
            <div className="relative rounded-2xl overflow-hidden">
              <img src={imagePreview} alt="Preview" className="w-full object-cover max-h-96 rounded-2xl" />
              <button
                onClick={() => setImagePreview(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center"
              >
                <X size={16} className="text-foreground" />
              </button>
            </div>
          ) : (
            <label className="aspect-video rounded-2xl border-2 border-dashed border-border bg-card flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/40 transition-colors">
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Camera size={28} className="text-muted-foreground" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">Add a photo (optional)</p>
                <p className="text-xs text-muted-foreground mt-1">You can also just share your thoughts</p>
              </div>
            </label>
          )}

          {/* Caption */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">What's on your mind?</label>
            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="Talk about your hair journey, your day, or anything else..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
            />
          </div>

          {/* Hair Type */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Hair Type <span className="text-muted-foreground">(optional)</span></label>
            <select
              value={hairType}
              onChange={(e) => setHairType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">Select hair type</option>
              <option>3A</option><option>3B</option><option>3C</option>
              <option>4A</option><option>4B</option><option>4C</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Tags <span className="text-muted-foreground">(optional)</span></label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="#twist-out, #wash-day, #4C-curls"
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Share Post
          </button>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Create;
