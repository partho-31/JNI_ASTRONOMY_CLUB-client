"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "July", magazine: 2, article: 8 },
  { month: "August", magazine: 7, article: 32 },
  { month: "September", magazine: 0, article: 0 },
  { month: "October", magazine: 2, article: 10 },
  { month: "November", magazine: 5, article: 24 },
  { month: "December", magazine: 1, article: 7 },
];

const chartConfig = {
  magazine: {
    label: "magazine",
    color: "var(--chart-1)",
  },
  article: {
    label: "article",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>
          Showing total publications for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="magazine" fill="var(--color-magazine)" radius={4} />
            <Bar dataKey="article" fill="var(--color-article)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center justify-between gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          July to December 2025 <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
