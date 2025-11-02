import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { PerksBenefits } from "@/components/ui/perks-benefits";
import { JobApplicationForm } from "@/components/forms/job-application-form";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Mail, 
  Calendar,
  ArrowLeft,
  Quote
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "@/lib/translation-context";

interface JobDetail {
  id: string;
  title: string;
  location: string;
  type: string;
  postedDate: string;
  description: string;
  requirements: string;
  skills: string[];
  benefits: string;
  salary: string;
  experience: string;
  contact: string;
  deadline: string | null;
}

export default function JobDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const { data: job, isLoading, error } = useQuery<JobDetail>({
    queryKey: ["/api/jobs", id],
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const testimonials = [
    {
      quote: "Working at Absouts has been an incredible journey. The team is supportive, the projects are challenging, and there's always room for growth.",
      author: "Sarah Ahmed",
      position: "Senior Software Developer"
    },
    {
      quote: "The work-life balance here is exceptional. Management truly cares about employee wellbeing and professional development.",
      author: "Razwan Hassan",
      position: "Cloud Accountant"
    },
    {
      quote: "I've learned more in my first year here than in my previous three jobs combined. The mentorship program is outstanding.",
      author: "Maria Rodriguez",
      position: "Business Development Executive"
    }
  ];

  if (isLoading) {
    return (
      <div className="pt-16" data-testid="job-detail-loading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-12 w-96 mb-4" />
              <Skeleton className="h-64 w-full mb-6" />
              <Skeleton className="h-48 w-full" />
            </div>
            <div>
              <Skeleton className="h-32 w-full mb-4" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="pt-16" data-testid="job-detail-error">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-destructive mb-4">Job Not Found</h1>
            <p className="text-muted-foreground mb-8">The job listing you're looking for doesn't exist or has been removed.</p>
            <Link href="/career">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Careers
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-16" data-testid="job-detail-page">
      <section className="py-8 bg-gradient-to-br from-bg-base via-bg-surface to-bg-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link href="/career">
            <Button variant="outline" className="mb-6" data-testid="back-to-careers">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Button>
          </Link>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Header */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border-0">
                <h1 className="text-4xl font-bold text-primary mb-4" data-testid="job-detail-title">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {job.type}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Posted {formatDate(job.postedDate)}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">About This Role</h3>
                  <p className="text-muted-foreground leading-relaxed" data-testid="job-description">
                    {job.description}
                  </p>
                </div>

                {/* Application Status */}
                <div className="bg-success/20 border border-success/40 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse mr-3"></div>
                    <span className="text-brand-primary font-medium">This position is currently open for applications</span>
                  </div>
                </div>
              </div>

              {/* Job Requirements */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border-0">
                <h3 className="text-2xl font-semibold text-primary mb-4">Requirements & Qualifications</h3>
                <div className="prose prose-lg max-w-none">
                  {job.requirements.split('\n').map((req, index) => (
                    <p key={index} className="text-muted-foreground mb-2">
                      • {req}
                    </p>
                  ))}
                </div>
              </div>

              {/* Job-specific Benefits */}
              {job.benefits && (
                <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border-0">
                  <h3 className="text-2xl font-semibold text-primary mb-4">What We Offer</h3>
                  <div className="prose prose-lg max-w-none">
                    {job.benefits.split('\n').map((benefit, index) => (
                      <p key={index} className="text-muted-foreground mb-2">
                        • {benefit}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Employee Testimonials */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border-0">
                <h3 className="text-2xl font-semibold text-primary mb-6">What Our Team Says</h3>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-accent pl-6">
                      <div className="flex items-start">
                        <Quote className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-muted-foreground italic mb-3 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div>
                            <p className="font-semibold text-primary">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Job Details Card */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 border-0">
                <h3 className="text-lg font-semibold text-primary mb-4">Job Details</h3>
                
                <div className="space-y-4">
                  {job.salary && (
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 text-accent mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Salary Range</p>
                        <p className="font-medium text-primary">{job.salary}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-accent mr-3" />
                    <div>
                      <p className="text-sm text-muted-foreground">Experience Required</p>
                      <p className="font-medium text-primary">{job.experience}</p>
                    </div>
                  </div>

                  {job.deadline && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-accent mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Application Deadline</p>
                        <p className="font-medium text-primary">{formatDate(job.deadline)}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-accent mr-3" />
                    <div>
                      <p className="text-sm text-muted-foreground">Contact</p>
                      <p className="font-medium text-primary">{job.contact}</p>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <Button 
                  onClick={() => setShowApplicationForm(true)}
                  className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                  data-testid="apply-now-button"
                >
                  Apply for This Position
                </Button>
              </div>

              {/* Skills Tags */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 border-0 lg:sticky lg:top-24 z-10">
                <h3 className="text-lg font-semibold text-primary mb-4">Required Skills</h3>
                <div className="flex flex-wrap gap-2" data-testid="required-skills">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Company-wide Perks & Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PerksBenefits />
        </div>
      </section>

      {/* Job Application Modal */}
      {showApplicationForm && (
        <JobApplicationForm
          jobId={job.id}
          jobTitle={job.title}
          isOpen={showApplicationForm}
          onClose={() => setShowApplicationForm(false)}
        />
      )}
    </div>
  );
}