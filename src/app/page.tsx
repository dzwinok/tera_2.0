import { BackgroundGradient } from "@/components/ui/bg-gradient";
import { WavyBackground } from "@/components/ui/waveBackground";
import { Card,CardDescription,CardFooter,CardHeader } from "@/components/ui/card";


export default function Home() {
  return (
    <main className="px-[20%] flex  flex-col items-center justify-between p-24  ">
    
      <h2 className="text-tera-green text-[52px] font-[700] self-start px-2 py-5 ">Teraconsult</h2>
      <div className=" w-[100%] mr-1 mb-[3%] md:w-[42%] lg:w-[28%]">
          {/*<WavyBackground />*/}
          
        <Card>
          <CardHeader>ІТ-КОНСАЛТИНГ
</CardHeader>
          <CardFooter>Бізнес-консалтинг та ІТ-консалтинг підприємств, що займаються торгівлею, дистрибуцією і логістикою
</CardFooter>
        </Card>
      
      
        <Card>
          <CardHeader>СПЕЦІАЛІЗОВАНЕ ОБЛАДНАННЯ
ТА ІТ-ІНФРАСТРУКТУРА
</CardHeader>
          <CardFooter>Впровадження і супровід ІТ-рішень для роздрібної торгівлі, дистрибуції, логістики, управління підприємством
</CardFooter>
        </Card>
      
      
        <Card>
          <CardHeader>ГАЛУЗЕВІ РІШЕННЯ

</CardHeader>
          <CardFooter>Впровадження і супровід ІТ-рішень для роздрібної торгівлі, дистрибуції, логістики, управління підприємством</CardFooter>
        </Card>
      
      </div>
    
    </main>
  );
}
