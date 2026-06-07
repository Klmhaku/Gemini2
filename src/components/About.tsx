/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Award, Zap, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const brandUSPs = [
    {
      icon: Heart,
      title: '김하쿠 브랜드 철학',
      description: '단순한 주입식 연산을 탈피하여 대상체에 대한 깊은 유대와 아카데믹 시너지를 추구하는 고감수성 고차원 엔지니어링 패러다임입니다.'
    },
    {
      icon: Cpu,
      title: '기가 스케일(GIGA) 인지 교육',
      description: '단순 보조 하드웨어가 아닌 기가스케일 연합 인공신경망 커널을 설계하고 로봇 관절에 실시간 무선 시냅스를 생성하는 국내 유일 실증 과정.'
    },
    {
      icon: Zap,
      title: '차세대 테슬라 로보틱스',
      description: '테슬라 옵티머스 관절 구동기 방식 및 제어 펌웨어를 실물 시뮬레이션하고, NexBot을 활용하여 즉각 포트폴리오를 구체화합니다.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Absolute Decorative Graphic Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-purple-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Vision with high-end typography */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span>DESIGNED BY INFRASTRUCTURE</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-slate-950 tracking-tight leading-normal">
              세상에 없던 <br/>
              <span className="text-purple-600 font-display">로봇 인지 공학</span> 아카데미
            </h2>
            
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              <strong>김하쿠를 사랑하는 아기구미</strong>가 주관하는 기가 로봇 교육(GIGA Education)은 로봇 인공지능 엔지니어를 목적으로 설계된 최고 권위의 프라이빗 러닝 연합입니다. 
              테슬라 최신 3D 관절 모델링과 가상 모션 동기화를 통과한 인재들만이 차세대 NexBot 프로젝트를 직관적으로 주도할 수 있습니다.
            </p>

            <div className="pt-4 space-y-3">
              <div className="flex items-center space-x-3 text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-tight">전국 상위 0.1% 로보틱스 실무 훈련생 육성</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-tight">NexBot v1.0 1인 1실물 매칭 하드웨어 교육 지원</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-800">
                <CheckCircle2 className="w-5 h-5 text-purple-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-tight">딥러닝 강화학습 강화 시뮬레이터 독점 제공</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key USPs in a futuristic stack of silver metallic cards with purple dots */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-6" id="about-usps">
            {brandUSPs.map((usp, idx) => (
              <div 
                key={idx}
                className="metallic-card p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-5 transition-all duration-300"
                id={`usp-card-${idx}`}
              >
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-purple-600 shadow-sm shrink-0">
                  <usp.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-semibold text-slate-900 text-lg tracking-tight">
                    {usp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}

            {/* High-end Brand Quote Panel */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 text-white flex items-center justify-between border border-slate-800 shadow-md">
              <div className="space-y-1">
                <p className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                  DIRECTOR STATEMENT
                </p>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  "우리는 단순한 기계를 가르치지 않습니다. 김하쿠를 사랑하는 아기구미는 지적 동적 자유의 정수를 주조합니다."
                </p>
              </div>
              <span className="text-3xl text-purple-500 font-display select-none">“</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
