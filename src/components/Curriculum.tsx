/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Hourglass, ArrowUpRight, Code2 } from 'lucide-react';
import { CURRICULUM_STEPS } from '../data';

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span>SYSTEMIZED ROADMAP</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-none">
              GIGA 교육과정 <span className="text-purple-600 font-display">커리큘럼</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              초급 강화학습의 시작에서부터, 실물 휴머노이드 로봇 관절 모터 제어 및 인지 슬램 자율 주행, 집단 지성 연합 제어에 이르는 완벽한 로보틱스 풀스택 스텝입니다.
            </p>
          </div>

          <div className="mt-6 md:mt-0 bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center space-x-4 max-w-sm">
            <div className="p-3 bg-purple-50 rounded-xl text-purple-600">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">TOTAL CLASS PERIOD</p>
              <p className="text-sm font-semibold text-slate-800">총 72주 풀스케일 교육 로드맵</p>
            </div>
          </div>
        </div>

        {/* Timeline Grid (4 steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10" id="curriculum-timeline">
          {CURRICULUM_STEPS.map((step, index) => {
            return (
              <div 
                key={step.phase}
                id={`curriculum-card-${index}`}
                className="metallic-card p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Visual Accent Corner Ribbon */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-100/30 via-slate-50/0 to-transparent pointer-events-none" />
                
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-purple-600 tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                      {step.phase}
                    </span>
                    <div className="flex items-center space-x-1 text-slate-400 font-mono text-[10px]">
                      <Hourglass className="w-3.5 h-3.5 text-slate-400" />
                      <span>{step.duration}</span>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase block mt-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-slate-950 text-xl sm:text-2xl mt-1 tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Tags section */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {step.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[10px] sm:text-[11px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 hover:border-purple-300 flex items-center justify-center text-slate-400 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
