import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get('title') || 'Muhammadrasul Gulomov';
  const subtitle = searchParams.get('subtitle') || 'Frontend Developer';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Chap yashil chiziq */}
        <div style={{
          position: 'absolute',
          left: 0, top: 0,
          width: '6px', height: '100%',
          background: '#5DCAA5',
        }} />

        {/* Subtitle */}
        <div style={{
          fontSize: '26px',
          color: '#5DCAA5',
          letterSpacing: '6px',
          marginBottom: '24px',
          fontWeight: 600,
        }}>
          {subtitle.toUpperCase()}
        </div>

        {/* Title */}
        <div style={{
          fontSize: '80px',
          color: '#ffffff',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '32px',
        }}>
          {title}
        </div>

        {/* Divider */}
        <div style={{
          width: '400px', height: '2px',
          background: '#2a2a3a',
          marginBottom: '24px',
        }} />

        {/* Stack */}
        <div style={{
          fontSize: '24px',
          color: '#888799',
        }}>
          React · TypeScript · Modern Web
        </div>

        {/* URL */}
        <div style={{
          position: 'absolute',
          bottom: '48px', right: '80px',
          fontSize: '20px',
          color: '#5DCAA5',
          border: '2px solid #5DCAA5',
          padding: '12px 28px',
          borderRadius: '40px',
        }}>
          gulomovdev.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}