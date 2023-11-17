"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import React, { useEffect, useState } from "react";

function Results({ ip }: { ip: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch(`/api/ip-lookup/${ip}`)
        .then((x) => x.json())
        .then((x) => {
          setResults(x);
        })
        .finally(() => setIsLoading(false));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">
          <Skeleton className="w-[700px] h-64 bg-slate-200" />
        </div>
      ) : results?.status === "success" ? (
        <div className="flex flex-col items-center gap-10">
          <Card className="w-[700px] py-10">
            <CardHeader>
              <CardTitle>{results.city}</CardTitle>
              <CardDescription>
                {results.country} / {results.regionName} {results.zip}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-start gap-4">
                <div className="flex flex-row gap-8 items-center">
                  <div className="flex gap-1 items-center">
                    <Badge>Latitude</Badge>
                    <Label>{results.lat}</Label>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Badge>Longitude</Badge>
                    <Label>{results.lon}</Label>
                  </div>
                </div>
                <div className="flex gap-8 items-center">
                  <div className="flex gap-1 items-center">
                    <Badge>Timezone</Badge>
                    <Label>{results.timezone}</Label>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Badge>ISP</Badge>
                    <Label>{results.isp}</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <iframe
            width="700"
            height="300"
            src={`https://www.google.com/maps/embed/v1/place?q=${results.lat},${results.lon}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`}
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Badge variant={"destructive"}>Bad Query</Badge>
      )}
    </div>
  );
}

export default Results;
