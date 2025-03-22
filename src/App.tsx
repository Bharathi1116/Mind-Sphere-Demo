
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Journal from "./pages/Journal";
import Therapy from "./pages/Therapy";
import Helpline from "./pages/Helpline";
import OnlineCounseling from "./pages/OnlineCounseling";
import SupportGroups from "./pages/SupportGroups";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import SelfCare from "./pages/SelfCare";
import NotFound from "./pages/NotFound";

// Feature Pages
import EmotionJournalPage from "./pages/EmotionJournal";
import EmotionalSupportPage from "./pages/EmotionalSupport";
import AITherapyPage from "./pages/AITherapy";
import MindfulBreaksPage from "./pages/MindfulBreaks";
import MoodNutritionPage from "./pages/MoodNutrition";
import NutritionRecipes from "./pages/NutritionRecipes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/counseling" element={<OnlineCounseling />} />
          <Route path="/groups" element={<SupportGroups />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
          <Route path="/self-care" element={<SelfCare />} />
          
          {/* Feature Pages */}
          <Route path="/emotion-journal" element={<EmotionJournalPage />} />
          <Route path="/emotional-support" element={<EmotionalSupportPage />} />
          <Route path="/ai-therapy" element={<AITherapyPage />} />
          <Route path="/mindful-breaks" element={<MindfulBreaksPage />} />
          <Route path="/mood-nutrition" element={<MoodNutritionPage />} />
          <Route path="/nutrition-recipes" element={<NutritionRecipes />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
