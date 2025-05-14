"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table"
import { Badge } from "../components/ui/badge"
import { Download, Filter, Plus, Search } from "lucide-react"

// 취약점 데이터
const vulnerabilitiesData = [
  {
    id: "VUL-1234",
    name: "SQL Injection in Login Form",
    asset: "auth-service.example.com",
    severity: "Critical",
    discovered: "2023-04-12",
    status: "Open",
    cvss: 9.8,
    cve: "CVE-2023-1234",
  },
  {
    id: "VUL-1235",
    name: "Cross-Site Scripting (XSS)",
    asset: "marketing-site.example.com",
    severity: "High",
    discovered: "2023-04-13",
    status: "In Progress",
    cvss: 7.5,
    cve: "CVE-2023-1235",
  },
  {
    id: "VUL-1236",
    name: "Outdated SSL Certificate",
    asset: "api.example.com",
    severity: "Medium",
    discovered: "2023-04-14",
    status: "Open",
    cvss: 5.3,
    cve: "CVE-2023-1236",
  },
  {
    id: "VUL-1237",
    name: "Insecure Direct Object Reference",
    asset: "admin-portal.example.com",
    severity: "High",
    discovered: "2023-04-15",
    status: "Open",
    cvss: 8.2,
    cve: "CVE-2023-1237",
  },
  {
    id: "VUL-1238",
    name: "Missing Security Headers",
    asset: "checkout.example.com",
    severity: "Low",
    discovered: "2023-04-16",
    status: "Remediated",
    cvss: 3.7,
    cve: "CVE-2023-1238",
  },
  {
    id: "VUL-1239",
    name: "Server-Side Request Forgery",
    asset: "internal-api.example.com",
    severity: "Critical",
    discovered: "2023-04-17",
    status: "Open",
    cvss: 9.1,
    cve: "CVE-2023-1239",
  },
  {
    id: "VUL-1240",
    name: "XML External Entity Injection",
    asset: "data-processor.example.com",
    severity: "High",
    discovered: "2023-04-18",
    status: "In Progress",
    cvss: 7.8,
    cve: "CVE-2023-1240",
  },
  {
    id: "VUL-1241",
    name: "Weak Password Policy",
    asset: "user-management.example.com",
    severity: "Medium",
    discovered: "2023-04-19",
    status: "Open",
    cvss: 5.5,
    cve: "CVE-2023-1241",
  },
  {
    id: "VUL-1242",
    name: "Unpatched Operating System",
    asset: "web-server-01.example.com",
    severity: "Critical",
    discovered: "2023-04-20",
    status: "Open",
    cvss: 9.5,
    cve: "CVE-2023-1242",
  },
  {
    id: "VUL-1243",
    name: "Insecure File Upload",
    asset: "content-management.example.com",
    severity: "Medium",
    discovered: "2023-04-21",
    status: "Open",
    cvss: 6.2,
    cve: "CVE-2023-1243",
  },
]

export default function VulnerabilitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(vulnerabilitiesData)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // 검색어 변경 시 데이터 필터링
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(vulnerabilitiesData)
    } else {
      const lowercasedFilter = searchTerm.toLowerCase()
      const filtered = vulnerabilitiesData.filter((item) => {
        return (
          item.name.toLowerCase().includes(lowercasedFilter) ||
          item.asset.toLowerCase().includes(lowercasedFilter) ||
          item.cve.toLowerCase().includes(lowercasedFilter)
        )
      })
      setFilteredData(filtered)
    }
    setCurrentPage(1) // 필터링 시 첫 페이지로 이동
  }, [searchTerm])

  // 페이지네이션 계산
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // 심각도에 따른 배지 렌더링
  const getSeverityBadge = (severity) => {
    switch (severity) {
      case "Critical":
        return <Badge variant="destructive">Critical</Badge>
      case "High":
        return (
          <Badge variant="default" className="bg-orange-500">
            High
          </Badge>
        )
      case "Medium":
        return (
          <Badge variant="default" className="bg-yellow-500">
            Medium
          </Badge>
        )
      case "Low":
        return (
          <Badge variant="default" className="bg-green-500">
            Low
          </Badge>
        )
      default:
        return <Badge variant="outline">{severity}</Badge>
    }
  }

  // 상태에 따른 배지 렌더링
  const getStatusBadge = (status) => {
    switch (status) {
      case "Open":
        return (
          <Badge variant="outline" className="text-red-500 border-red-500">
            Open
          </Badge>
        )
      case "In Progress":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            In Progress
          </Badge>
        )
      case "Remediated":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Remediated
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>All Vulnerabilities</CardTitle>
          <CardDescription>View and manage all detected vulnerabilities across your assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search vulnerabilities..."
                  className="w-[300px] pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Vulnerability
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Vulnerability</TableHead>
                <TableHead>Asset</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>CVSS</TableHead>
                <TableHead>CVE</TableHead>
                <TableHead>Discovered</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={9} className="h-24 text-center">
                    No vulnerabilities found
                  </TableCell>
                </TableRow>
              ) : (
                currentItems.map((vulnerability) => (
                  <TableRow key={vulnerability.id}>
                    <TableCell className="font-medium">{vulnerability.id}</TableCell>
                    <TableCell>{vulnerability.name}</TableCell>
                    <TableCell>{vulnerability.asset}</TableCell>
                    <TableCell>{getSeverityBadge(vulnerability.severity)}</TableCell>
                    <TableCell>{vulnerability.cvss}</TableCell>
                    <TableCell>{vulnerability.cve}</TableCell>
                    <TableCell>{vulnerability.discovered}</TableCell>
                    <TableCell>{getStatusBadge(vulnerability.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4">
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
