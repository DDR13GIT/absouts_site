import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
      
      <Card className="group w-full max-w-md mx-4 bg-white/70 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 hover:bg-white/90 cursor-pointer relative overflow-hidden">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <CardContent className="pt-6 relative z-10">
          <div className="flex mb-4 gap-2 items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
              <AlertCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            The page you're looking for doesn't exist. Please check the URL or navigate back to the homepage.
          </p>
          
          <div className="mt-6">
            <a href="/" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              <span>← Back to Home</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
