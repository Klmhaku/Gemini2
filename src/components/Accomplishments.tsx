/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Building, Compass, Sparkles, Filter } from 'lucide-react';
import { ACCOMPLISHMENTS } from '../data';
import { Accomplishment } from '../types';

type FilterType = 'All' | 'Education' | 'Competition' | 'R&D' | 'MOU';

export default function Accomplishments() {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filteredAccomplishments = selectedFilter === 'All'
    ? ACCOMPLISHMENTS
    : ACCOMPLISHMENTS.filter(a => a.category === selectedFilter);

  const filterTabs: { label: string; value: FilterType }[] = [
    { label: '전체 보기', value: 'All' },
    { label: '경진 및 경연 (Competition)', value: 'Competition' },
    { label: '인프라 및 교육 (Education)', value: 'Education' },
    { label: '연구 및 실증 (R&D)', value: 'R&D' },
    { label: '수립 및 제휴 (MOU)', value: 'MOU' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Competition':
        return Trophy;
      case 'Education':
        return Award;
      case 'R&D':
        return Compass;
      default:
        return Building;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Competition':
        return 'text-amber-500 bg-amber-50 border-amber-100';
      case 'Education':
        return 'text-purple-600 bg-purple-50 border-purple-100';
      case 'R&D':
        return 'text-blue-600 bg-blue-50 border-blue-100';
      default:
        return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <section id="accomplishments" className="py-24 bg-slate-50 relative border-t border-b border-rose-500/0 overflow-hidden">
      {/* Absolute Decorative Geometric Shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-100/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider mb-4 shadow-sm">
            <span>UNMATCHED MILESTONES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-950 tracking-tight leading-none">
            GIGA 교육 실기 및 <span className="text-purple-600 font-display">주요 실적</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed max-w-lg mx-auto">
            김하쿠를 사랑하는 아기구미 단체가 추진해 온 국공립 연계 프로젝트, 글로벌 경연 수상 레코드 등 독보적인 실적 로드맵을 확인하십시오.
          </p>
        </div>

        {/* Filter Navigation Links */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="accomplishments-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              id={`filter-tab-${tab.value}`}
              onClick={() => setSelectedFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 pointer-events-auto cursor-pointer ${
                selectedFilter === tab.value
                  ? 'bg-slate-950 text-white shadow-md shadow-slate-950/10 border border-slate-900 scale-102'
                  : 'bg-white text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filtered Accomplishments Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="accomplishments-timeline">
          <AnimatePresence mode="popLayout">
            {filteredAccomplishments.map((item, index) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.title}
                  id={`accomplishment-item-${index}`}
                  className="metallic-card p-6 sm:p-8 rounded-3xl bg-white flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Badge Category Ribbon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`p-2 rounded-lg border ${getCategoryColor(item.category)}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">
                          {item.category} RECORD
                        </span>
                      </div>
                      <span className="font-display font-black text-2xl text-slate-300">
                        {item.year}
                      </span>
                    </div>

                    {/* Content Detail */}
                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-slate-950 text-lg sm:text-xl tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-1 p-1 bg-purple-50/50 border border-purple-100/50 rounded-lg max-w-max">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-[10px] sm:text-xs font-mono font-semibold text-purple-700">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal pt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[9px] font-mono font-semibold text-slate-400">
                      SYSTEM METRIC VERIFIED
                    </span>
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>99.8% COMPLETION</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
