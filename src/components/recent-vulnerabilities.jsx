import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export function RecentVulnerabilities({ className }) {
  const vulnerabilities = [
    {
      id: "VUL-001",
      name: "SQL Injection",
      severity: "Critical",
      status: "Open",
      affected: "Web Application",
      discovered: "2023-05-15",
    },
    {
      id: "VUL-002",
      name: "Cross-Site Scripting (XSS)",
      severity: "High",
      status: "In Progress",
      affected: "User Portal",
      discovered: "2023-05-20",
    },
    {
      id: "VUL-003",
      name: "Outdated SSL Certificate",
      severity: "Medium",
      status: "Resolved",
      affected: "API Gateway",
      discovered: "2023-04-30",
    },
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Critical":
        return "destructive"
      case "High":
        return "destructive"
      case "Medium":
        return "warning"
      case "Low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Vulnerabilities</CardTitle>
        <CardDescription>Recently discovered vulnerabilities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {vulnerabilities.map((vulnerability) => (
            <div key={vulnerability.id} className="flex items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{vulnerability.name}</p>
                <div className="flex items-center pt-2">
                  <Badge variant={getSeverityColor(vulnerability.severity)} className="mr-1">
                    {vulnerability.severity}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {vulnerability.affected} • {vulnerability.discovered}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
