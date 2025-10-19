import { Card } from "@/components/ui/card";
import amesVideo from "@/assets/ames-video.mp4";

const VideoSection = () => {
  return (
    <section className="py-20 bg-hope-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Découvrez{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AMES-CI en vidéo
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plongez au cœur de nos actions et découvrez l'impact de notre mission
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-vibrant">
            <video 
              controls 
              className="w-full aspect-video"
              poster=""
            >
              <source src={amesVideo} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
