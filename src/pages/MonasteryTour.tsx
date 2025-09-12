import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, Star, ArrowLeft, ArrowRight, MapPin, Calendar, Users, Camera } from 'lucide-react';

// Monastery data - in a real app, this would come from a database or API
const monasteryData = {
  'rumtek-monastery': {
    name: 'Rumtek Monastery',
    intro: 'The largest monastery in Sikkim, seat of the Karmapa and center of Kagyu tradition. Built in the 16th century, it houses some of the world\'s most sacred Buddhist artifacts.',
    cultural: 'Rumtek Monastery stands as a masterpiece of Tibetan architecture, featuring intricate wood carvings, golden stupas, and vibrant murals depicting the life of Buddha. The monastery follows the Karma Kagyu lineage and serves as the seat of the Gyalwa Karmapa. Its three-story structure houses a magnificent prayer hall with a 20-foot golden Buddha statue, ancient scriptures, and precious relics brought from Tibet.',
    duration: '45 min tour',
    views: '12,540',
    rating: '4.8',
    region: 'East Sikkim',
    established: '1966 (rebuilt)',
    altitude: '1,550m'
  },
  'pemayangtse-monastery': {
    name: 'Pemayangtse Monastery',
    intro: 'One of the oldest monasteries in Sikkim, meaning "Perfect Sublime Lotus." Founded in 1705, it represents the pure Nyingma tradition and offers breathtaking Himalayan views.',
    cultural: 'Pemayangtse is renowned for its seven-tiered wooden sculpture called "Zangdok Palri" representing the heavenly palace of Guru Rinpoche. The monastery\'s ancient wooden architecture showcases exquisite craftsmanship with intricate carvings and traditional murals. It serves as the head monastery of all Nyingma monasteries in Sikkim and houses rare Buddhist scriptures and artifacts.',
    duration: '30 min tour',
    views: '8,920',
    rating: '4.7',
    region: 'West Sikkim',
    established: '1705',
    altitude: '2,085m'
  },
  'enchey-monastery': {
    name: 'Enchey Monastery',
    intro: 'A sacred Nyingma monastery meaning "Solitary Temple," perched above Gangtok with panoramic views. Built in 1909, it\'s known for its powerful spiritual energy and annual Cham dance.',
    cultural: 'Enchey Monastery is built on a site blessed by Lama Druptob Karpo, who could fly. The monastery\'s architecture blends traditional Tibetan and Sikkimese styles, featuring colorful prayer flags and spinning prayer wheels. The annual Cham dance performed here is believed to destroy evil forces and bring prosperity to the region.',
    duration: '25 min tour',
    views: '6,750',
    rating: '4.6',
    region: 'Gangtok',
    established: '1909',
    altitude: '1,675m'
  },
  'tashiding-monastery': {
    name: 'Tashiding Monastery',
    intro: 'The "Glory of the Central Peak" monastery, one of Sikkim\'s most sacred sites. Built in 1717, it\'s believed that a mere sight of this monastery can wash away sins.',
    cultural: 'Tashiding sits atop a hill between the Rathong and Rangeet rivers, considered one of the most sacred spots in Sikkim. The monastery houses the sacred Bumchu ceremony where holy water is distributed annually. Its unique location and spiritual significance make it a pilgrimage site for Buddhists worldwide.',
    duration: '35 min tour',
    views: '5,430',
    rating: '4.9',
    region: 'West Sikkim',
    established: '1717',
    altitude: '1,465m'
  },
  'dubdi-monastery': {
    name: 'Dubdi Monastery',
    intro: 'Sikkim\'s oldest monastery, meaning "The Retreat." Founded in 1701 by Chogyal Namgyal, it marks the beginning of Buddhism in Sikkim and offers serene forest surroundings.',
    cultural: 'Dubdi Monastery, also known as Hermit\'s Cell, was the first monastery built in Sikkim. Nestled in dense forests, it maintains the ancient meditation tradition with simple architecture that harmonizes with nature. The monastery played a crucial role in establishing Buddhism in Sikkim and preserving Nyingma teachings.',
    duration: '20 min tour',
    views: '4,200',
    rating: '4.5',
    region: 'West Sikkim',
    established: '1701',
    altitude: '2,100m'
  },
  'tsuglakhang-monastery': {
    name: 'Tsuglakhang Monastery',
    intro: 'Also known as the Royal Chapel, Tsuglakhang is a prominent monastic complex in Gangtok that serves as an important center for Buddhist worship and community gatherings.',
    cultural: 'Tsuglakhang houses impressive statues of Shakyamuni Buddha, Guru Rinpoche, and Green Tara, and features intricately painted murals that depict key episodes from Buddhist teachings. The monastery\'s spacious prayer hall hosts major ceremonies and festivals, drawing monks and devotees from across Sikkim. Its central location and active spiritual life make it a vibrant cultural landmark.',
    duration: '20 min tour',
    views: '6,200',
    rating: '4.7',
    region: 'Gangtok',
    established: '20th century',
    altitude: '1,650m'
  },
  'ralang-monastery': {
    name: 'Ralang Monastery',
    intro: 'A picturesque Kagyu monastery known for its annual Pang Lhabsol festival. Founded in 1768, it celebrates the guardian deity of Sikkim with colorful masked dances and rituals.',
    cultural: 'Ralang Monastery is famous for hosting the Pang Lhabsol festival, celebrating Mount Khangchendzonga as Sikkim\'s guardian deity. The monastery\'s architecture reflects the Kagyu tradition with beautiful murals and sculptures. It plays a vital role in preserving Sikkimese cultural traditions and religious practices.',
    duration: '30 min tour',
    views: '7,100',
    rating: '4.6',
    region: 'South Sikkim',
    established: '1768',
    altitude: '1,200m'
  },
  'namgyal-institute': {
    name: 'Namgyal Institute of Tibetology',
    intro: 'A premier center for Tibetan Buddhist studies and research. Established in 1958, it houses the world\'s largest collection of Tibetan Buddhist literature and artifacts.',
    cultural: 'The Namgyal Institute serves as a beacon of Tibetan Buddhist scholarship and research. Its museum displays rare manuscripts, thangkas, statues, and ritual objects. The institute\'s traditional Tibetan architecture houses one of the world\'s most comprehensive collections of Mahayana Buddhism literature and promotes the study of Tibetan culture.',
    duration: '40 min tour',
    views: '9,680',
    rating: '4.8',
    region: 'Gangtok',
    established: '1958',
    altitude: '1,650m'
  }
};

const MonasteryTour = () => {
  const { monasteryId } = useParams<{ monasteryId: string }>();
  const navigate = useNavigate();
  
  const monastery = monasteryId ? monasteryData[monasteryId as keyof typeof monasteryData] : null;

  if (!monastery) {
    navigate('/virtual-tours');
    return null;
  }

  const handleBackToTours = () => {
    navigate('/virtual-tours');
  };

  const handleNextTour = () => {
    const monasteryKeys = Object.keys(monasteryData);
    const currentIndex = monasteryKeys.findIndex(key => key === monasteryId);
    const nextIndex = (currentIndex + 1) % monasteryKeys.length;
    navigate(`/monastery/${monasteryKeys[nextIndex]}`);
  };

  // Map monastery IDs to their Google Street View embed URLs
  const streetViewEmbeds: Record<string, string> = {
    'rumtek-monastery': 'https://www.google.com/maps/embed?pb=!4v1757680616037!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJRDJnWVdjb2dF!2m2!1d27.2885258949387!2d88.56180959787903!3f301.9788059797565!4f0.9119374938309335!5f0.7820865974627469',
    'pemayangtse-monastery': 'https://www.google.com/maps/embed?pb=!4v1757680828156!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREUzSlhyOXdF!2m2!1d27.30291171978085!2d88.24216202374956!3f79.34138309549945!4f10.419868276619113!5f0.4000000000000002',
    'enchey-monastery': 'https://www.google.com/maps/embed?pb=!4v1757681073294!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJREc2cWJ1andF!2m2!1d27.33580288383717!2d88.61928037024981!3f339.8246406038699!4f14.74963854359298!5f0.7820865974627469',
    'tashiding-monastery': 'https://www.google.com/maps/embed?pb=!4v1757681180280!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V6b09UVnc.!2m2!1d27.3080960299431!2d88.29783391014004!3f337.65950812798184!4f-9.156357182227282!5f0.7820865974627469',
    'dubdi-monastery': 'https://www.google.com/maps/embed?pb=!4v1757681283108!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0VfNWJDZlE.!2m2!1d27.36641022759916!2d88.22990891649984!3f36.110707054453925!4f9.542718876159782!5f0.4000000000000002',
    'ralang-monastery': 'https://www.google.com/maps/embed?pb=!4v1757681824215!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzR1cGlsdVFF!2m2!1d27.32849642917133!2d88.33524783237412!3f275.09818404913534!4f19.44089374911634!5f0.4000000000000002',
    'tsuglakhang-monastery': 'https://www.google.com/maps/embed?pb=!4v1757681530297!6m8!1m7!1sEPQJffAmE8DMLZqJNuBvww!2m2!1d27.32581459802226!2d88.61421032737204!3f192.6241034973727!4f7.218840759702857!5f0.7820865974627469',
    'namgyal-institute': 'https://www.google.com/maps/embed?pb=!4v1757681952412!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ09pcHprSUE.!2m2!1d27.31567431431811!2d88.60502582995912!3f257.8631096877136!4f24.134779969897295!5f0.4000000000000002'
  };
  const streetViewSrc = monasteryId ? streetViewEmbeds[monasteryId] : undefined;

  return (
    <div className="min-h-screen bg-background">
      {/* Full-width 360° Virtual Tour Section */}
      <section className="relative w-full h-[60vh] bg-muted overflow-hidden">
        {/* Google Maps Street View */}
        {streetViewSrc ? (
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={streetViewSrc}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${monastery.name} 360 View`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-himalayan flex items-center justify-center">
            <div className="text-center text-primary-foreground">
              <Camera className="mx-auto mb-4 h-16 w-16 opacity-70" />
              <h3 className="text-2xl font-bold mb-2">360° Virtual Tour</h3>
              <p className="text-lg opacity-90">Interactive Street View Experience</p>
              <p className="text-sm mt-2 opacity-80">[Google Maps Street View Coming Soon]</p>
            </div>
          </div>
        )}
        
        {/* Overlay Controls */}
        <div className="absolute top-6 left-6 z-10">
          <Button 
            variant="secondary" 
            onClick={handleBackToTours}
            className="bg-background/20 backdrop-blur-md hover:bg-background/30 text-foreground border-border/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Button>
        </div>

        <div className="absolute top-6 right-6 z-10">
          <div className="bg-monastery-gold/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <span className="text-monastery-burgundy font-bold text-sm">360° INTERACTIVE</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title & Introduction */}
        <section className="mb-16">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-primary mr-3" />
            <span className="text-muted-foreground">{monastery.region}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 bg-gradient-monastery bg-clip-text text-transparent">
            {monastery.name}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {monastery.intro}
          </p>
        </section>

        {/* Quick Facts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Quick Facts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card hover:shadow-monastery transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Duration</h3>
                <p className="text-muted-foreground">{monastery.duration}</p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-monastery transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Eye className="h-8 w-8 text-himalayan-blue mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Views</h3>
                <p className="text-muted-foreground">{monastery.views}</p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-monastery transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-monastery-gold mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Rating</h3>
                <p className="text-muted-foreground">{monastery.rating} / 5.0</p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-monastery transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-monastery-burgundy mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Established</h3>
                <p className="text-muted-foreground">{monastery.established}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cultural Significance Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Cultural Significance</h2>
          
          <Card className="bg-gradient-to-br from-card to-muted/30 border-primary/20">
            <CardContent className="p-8">
              <p className="text-lg text-card-foreground leading-relaxed">
                {monastery.cultural}
              </p>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Altitude: {monastery.altitude}
                  </span>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Region: {monastery.region}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Footer Navigation */}
        <section className="flex justify-between items-center pt-12 border-t border-border">
          <Button 
            variant="outline" 
            onClick={handleBackToTours}
            className="px-8 py-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Tours
          </Button>
          
          <Button 
            onClick={handleNextTour}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            Next Tour
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default MonasteryTour;