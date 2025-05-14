import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>WS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">웹 서버 취약점 점검</p>
          <p className="text-sm text-muted-foreground">2023-06-15</p>
        </div>
        <div className="ml-auto font-medium">12개 발견</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>DB</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">데이터베이스 보안 점검</p>
          <p className="text-sm text-muted-foreground">2023-06-10</p>
        </div>
        <div className="ml-auto font-medium">8개 발견</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">클라우드 인프라 취약점 점검</p>
          <p className="text-sm text-muted-foreground">2023-06-05</p>
        </div>
        <div className="ml-auto font-medium">5개 발견</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>FW</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">네트워크 장비 취약점 점검</p>
          <p className="text-sm text-muted-foreground">2023-05-28</p>
        </div>
        <div className="ml-auto font-medium">7개 발견</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">서버 OS 취약점 점검</p>
          <p className="text-sm text-muted-foreground">2023-05-20</p>
        </div>
        <div className="ml-auto font-medium">10개 발견</div>
      </div>
    </div>
  )
}
