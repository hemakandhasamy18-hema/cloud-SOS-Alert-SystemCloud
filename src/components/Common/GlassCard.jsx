import React from 'react'

const GlassCard = ({ children, className = '' }) => (
  <div className={`glass-panel p-5 ${className}`}>{children}</div>
)

export default GlassCard
