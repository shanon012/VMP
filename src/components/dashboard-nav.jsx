import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  BarChart3,
  Home,
  Server,
  FileText,
  Users,
  Settings,
  Bell,
  HelpCircle,
  ClipboardCheck,
} from "lucide-react";

export function DashboardNav({ className, ...props }) {
  const location = useLocation();

  const isActive = (path) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const items = [
    {
      name: "대시보드",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "자산 관리",
      href: "/assets",
      icon: Server,
    },
    {
      name: "취약점 점검 신청",
      href: "/requests",
      icon: FileText,
      children: [
        {
          name: "취약점 신청 현황",
          href: "/requests/list",
        },
        {
          name: "취약점 신청",
          href: "/requests/new",
        },
      ],
    },
    {
      name: "취약점 점검 결과",
      href: "/results",
      icon: ClipboardCheck,
      children: [
        {
          name: "전자금융기반시설 점검 결과",
          href: "/results/Infrastructure-results",
        },
        {
          name: "보안성심의 취약점 점검 결과",
          href: "/results/financial-results",
        },
      ],
    },
    {
      name: "취약점 리스트",
      href: "/vulnerabilities",
      icon: BarChart3,
    },

    {
      name: "분석",
      href: "/analytics",
      icon: BarChart3,
    },
    {
      name: "분석kr",
      href: "/analyticskr",
      icon: BarChart3,
    },
    {
      name: "공지사항",
      href: "/announcements",
      icon: Bell,
    },
    {
      name: "사용자 관리",
      href: "/users",
      icon: Users,
    },
    {
      name: "환경설정",
      href: "/settings",
      icon: Settings,
    },
    {
      name: "도움말",
      href: "/help",
      icon: HelpCircle,
    },
  ];

  return (
    <nav
      className={cn(
        "flex-col space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <div key={item.href}>
          <Link
            to={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              isActive(item.href)
                ? "bg-accent text-accent-foreground"
                : "transparent"
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.name}</span>
          </Link>
          {item.children && (
            <div className="ml-6 mt-1 space-y-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  to={child.href}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    isActive(child.href)
                      ? "bg-accent text-accent-foreground"
                      : "transparent"
                  )}
                >
                  <span>{child.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
