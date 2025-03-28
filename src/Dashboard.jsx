
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/MyCard";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const monthlyData = [
  { month: "1월", sales: 446879800, profit: 97252180 },
  { month: "2월", sales: 534295800, profit: 116275100 },
  { month: "3월", sales: 453109500, profit: 90300400 },
];

const brandData = [
  { brand: "잇츄", profit: 107358800 },
  { brand: "포우장", profit: 62151830 },
  { brand: "플라고", profit: 37421190 },
  { brand: "냥쌤", profit: 44884750 },
  { brand: "인섹트업", profit: 18893490 },
];

const sellerData = [
  { name: "쿠팡로켓", value: 605945200 },
  { name: "쿠팡윙", value: 193672200 },
  { name: "스마트스토어", value: 305719000 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export default function Dashboard() {
  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {/* Summary Cards */}
      <Card><CardContent><p className="text-sm">총 매출</p><p className="text-xl font-bold">₩1,434,285,077</p></CardContent></Card>
      <Card><CardContent><p className="text-sm">총 공헌이익</p><p className="text-xl font-bold">₩303,827,649</p></CardContent></Card>
      <Card><CardContent><p className="text-sm">총 수량</p><p className="text-xl font-bold">141,249개</p></CardContent></Card>
      <Card><CardContent><p className="text-sm">이익률</p><p className="text-xl font-bold">21.2%</p></CardContent></Card>

      {/* Line Chart: 월별 매출 추이 */}
      <div className="col-span-1 md:col-span-2">
        <Card>
          <CardContent>
            <p className="text-lg font-semibold mb-2">월별 매출 추이</p>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" name="매출" />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="이익" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bar Chart: 브랜드별 이익 */}
      <Card>
        <CardContent>
          <p className="text-lg font-semibold mb-2">브랜드별 공헌이익</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={brandData}>
              <XAxis dataKey="brand" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="profit" fill="#8884d8" name="공헌이익" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Pie Chart: 거래처별 매출 비중 */}
      <Card>
        <CardContent>
          <p className="text-lg font-semibold mb-2">판매처별 매출 비중</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={sellerData} dataKey="value" nameKey="name" outerRadius={80} label>
                {sellerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
