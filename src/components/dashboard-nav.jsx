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
      name: "사용자 관리1",
      href: "/users1",
      icon: Users,
    },
    {
      name: "사용자 관리2",
      href: "/users2",
      icon: Users,
    },
    {
      name: "사용자 관리2",
      href: "/users2",
      icon: Users,
    },
    {
      name: "사용자 관리2",
      href: "/users2",
      icon: Users,
    },
    {
      name: "사용자 관리2",
      href: "/users2",
      icon: Users,
    },
    {
      name: "사용자 관리2",
      href: "/users2",
      icon: Users,
    },
  ];

  const bottomItems = [
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
        "flex flex-col overflow-hidden",
        "space-x-2 lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      <div className="flex-1 overflow-y-auto px-0 py-2">
        {items.map((item) => {
          // 자식이 있으면 부모 클릭 시 첫번째 자식으로 보낸다
          const to = item.children?.[0]?.href ?? item.href;

          return (
            <div key={item.href}>
              <Link
                to={to}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  // 부모 활성 여부 ("/requests"면 "/requests/list"나 "/requests/new" 전부 포함)
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
                        // 자식 활성 여부
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
          );
        })}
      </div>

      <div className="flex-shrink-0 sticky bottom-0 border-t border-gray-200 dark:border-[#1F1F23]">
        <div className="space-y-1">
          {bottomItems.map((bottom) => (
            <Link
              key={bottom.href}
              to={bottom.href}
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                // 자식 활성 여부
                isActive(bottom.href)
                  ? "bg-accent text-accent-foreground"
                  : "transparent"
              )}
            >
              <bottom.icon className="mr-2 h-4 w-4" />
              <span>{bottom.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
