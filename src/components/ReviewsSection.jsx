import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { REVIEWS } from '../utils/constants';
import { SectionHeader } from './ui/AnimatedText';

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <FiStar
        key={star}
        size={14}
        className={star <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}
        style={{ fill: star <= rating ? '#FBBF24' : 'none' }}
      />
    ))}
  </div>
);

const ReviewCard = ({ review, delay = 0 }) => {
  const initials = review.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const colors = ['#3B82F6', '#8B5CF6', '#10B981', '#F97316', '#EC4899', '#06B6D4'];
  const colorIndex = review.id % colors.length;
  const avatarColor = colors[colorIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <div className="h-full p-6 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 flex flex-col">
        {/* Quote mark */}
        <div className="text-5xl text-blue-500/20 font-serif leading-none mb-3 select-none">"</div>

        {/* Stars */}
        <div className="mb-3">
          <StarRating rating={review.rating} />
        </div>

        {/* Review text */}
        <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5">
          {review.text}
        </p>

        {/* Project tag */}
        <div className="mb-4">
          <span className="inline-block px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs border border-blue-500/15">
            {review.project}
          </span>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-700/40">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: `${avatarColor}20`, color: avatarColor, border: `1px solid ${avatarColor}30` }}
          >
            {initials}
          </div>
          <div>
            <p className="text-slate-100 font-semibold text-sm">{review.name}</p>
            <p className="text-slate-500 text-xs">{review.role}, {review.company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ReviewsSection = () => {
  const featured = REVIEWS.filter(r => r.is_featured);
  const others = REVIEWS.filter(r => !r.is_featured);

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header with overall rating */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <SectionHeader
            tag="Client Reviews"
            heading="What Our Clients Say"
            subheading="Real words from real clients — no fluff"
            centered={false}
            className="mb-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-center min-w-[180px]"
          >
            <p className="text-5xl font-bold text-white mb-1">4.9</p>
            <div className="flex justify-center gap-0.5 mb-2">
              {[1,2,3,4,5].map(s => (
                <FiStar key={s} size={16} className="text-amber-400" style={{ fill: '#FBBF24' }} />
              ))}
            </div>
            <p className="text-slate-400 text-sm">8+ Reviews</p>
          </motion.div>
        </div>

        {/* Featured Reviews - Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-5 mb-5">
          {featured.map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={i * 0.1} />
          ))}
        </div>

        {/* More reviews on desktop */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-2 gap-5 mb-5">
          {others.slice(0, 2).map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={0.1 + i * 0.05} />
          ))}
        </div>

        {/* Last row desktop */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {others.slice(2).map((review, i) => (
            <ReviewCard key={review.id} review={review} delay={0.1 + i * 0.05} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="reviews-swiper pb-10"
          >
            {REVIEWS.map((review) => (
              <SwiperSlide key={review.id}>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
