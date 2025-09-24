import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, AlertTriangle, Users, HeartHandshake } from "lucide-react";

const emergencyServices = [
  {
    service: "National Emergency",
    number: "112",
    description: "Single emergency number for all emergencies",
    available: "24/7",
    icon: AlertTriangle,
    color: "destructive"
  },
  {
    service: "Fire Brigade",
    number: "101",
    description: "Fire emergencies and rescue operations",
    available: "24/7",
    icon: AlertTriangle,
    color: "destructive"
  },
  {
    service: "Police",
    number: "100",
    description: "Law enforcement and security emergencies",
    available: "24/7",
    icon: Users,
    color: "primary"
  },
  {
    service: "Medical Emergency",
    number: "108",
    description: "Ambulance and medical assistance",
    available: "24/7",
    icon: HeartHandshake,
    color: "secondary"
  }
];

const regionalContacts = [
  {
    region: "Delhi NCR",
    coordinator: "Dr. Rajesh Kumar",
    phone: "+91 98765 43210",
    district: "District Disaster Management"
  },
  {
    region: "Mumbai",
    coordinator: "Mrs. Priya Sharma",
    phone: "+91 87654 32109",
    district: "Municipal Corporation"
  },
  {
    region: "Bangalore",
    coordinator: "Mr. Arun Patel",
    phone: "+91 76543 21098",
    district: "BBMP Disaster Cell"
  }
];

const EmergencyContacts = () => {
  return (
    <section id="emergency" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-destructive text-destructive">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Emergency Response
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Emergency Contact Directory
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quick access to emergency services and regional disaster management coordinators. 
            Always available when you need them most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* National Emergency Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Phone className="mr-3 h-6 w-6 text-destructive" />
              National Emergency Services
            </h3>
            <div className="space-y-4">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-destructive">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-full bg-${service.color}/10`}>
                          <service.icon className={`h-6 w-6 text-${service.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{service.service}</h4>
                          <p className="text-muted-foreground text-sm">{service.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{service.available}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-destructive mb-2">{service.number}</div>
                        <Button size="sm" variant="destructive">
                          <Phone className="mr-1 h-3 w-3" />
                          Call
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regional Coordinators */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <MapPin className="mr-3 h-6 w-6 text-primary" />
              Regional Coordinators
            </h3>
            <div className="space-y-4">
              {regionalContacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{contact.region}</CardTitle>
                      <Badge variant="outline">{contact.district}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">{contact.coordinator}</p>
                        <p className="text-sm text-muted-foreground">Disaster Management Coordinator</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-mono">{contact.phone}</span>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="mr-1 h-3 w-3" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContacts;