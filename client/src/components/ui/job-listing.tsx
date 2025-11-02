import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, DollarSign } from "lucide-react";

interface JobListingProps {
  job: {
    id: string;
    title: string;
    location: string;
    type: string;
    postedDate: string;
    description: string;
    skills: string[];
    salary?: string;
    experience?: string;
    benefits?: string;
    requirements?: string;
    contact?: string;
    deadline?: string | null;
  };
  onApply: (jobId: string, jobTitle: string) => void;
}

export function JobListing({ job, onApply }: JobListingProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Posted 1 day ago";
    if (diffDays < 7) return `Posted ${diffDays} days ago`;
    if (diffDays < 30) return `Posted ${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    return `Posted ${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
  };

  return (
    <Card className="border border-border shadow-lg" data-testid={`job-listing-${job.id}`}>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2" data-testid={`job-title-${job.id}`}>{job.title}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </span>
              <span className="flex items-center">
                <Briefcase className="h-4 w-4 mr-1" />
                {job.type}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {formatDate(job.postedDate)}
              </span>
              {job.salary && (
                <span className="flex items-center font-medium text-brand-accent">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {job.salary}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button 
              onClick={() => onApply(job.id, job.title)} 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              data-testid={`button-apply-${job.id}`}
            >
              Apply Now
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = `/job/${job.id}`}
              data-testid={`button-details-${job.id}`}
            >
              Show Details
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4" data-testid={`job-description-${job.id}`}>
          {job.description}
        </p>
        <div className="flex flex-wrap gap-2" data-testid={`job-skills-${job.id}`}>
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
