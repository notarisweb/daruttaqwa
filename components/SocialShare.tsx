"use client"; 

import React from 'react';
import { Share2, Link as LinkIcon } from 'lucide-react';

interface SocialShareProps {
  shareUrl: string;
  title: string;
}

export default function SocialShare({ shareUrl, title }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  // KUNCINYA: Tambahkan flexShrink: 0 agar kotak tidak tertekan (gepeng)
  const iconBoxStyle = (bgColor: string): React.CSSProperties => ({
    width: '42px',
    height: '42px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bgColor,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    flexShrink: 0, // Mencegah icon jadi gepeng
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link berhasil disalin ke clipboard!");
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      flexWrap: 'wrap', // Izinkan turun baris jika layar sempit
      gap: '15px', 
      margin: '40px 0', 
      fontFamily: 'inherit' 
    }}>
      
      {/* LABEL BAGIKAN */}
      <div style={{ 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        padding: '10px 18px', 
        border: '1px solid #e2e8f0', 
        borderRadius: '8px', 
        backgroundColor: '#fff',
        flexShrink: 0 
      }}>
        <Share2 size={18} color="#1e2f65" />
        <div style={{ width: '1px', height: '20px', backgroundColor: '#e2e8f0' }}></div>
        <span style={{ fontWeight: '800', color: '#1e2f65', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Bagikan</span>
        
        {/* Pointer Segitiga (Hanya terlihat bagus jika tidak wrap, di mobile otomatis menyesuaikan) */}
        <div className="hide-on-mobile-arrow" style={{ 
          position: 'absolute', 
          right: '-7px', 
          top: '50%', 
          transform: 'translateY(-50%) rotate(45deg)', 
          width: '12px', 
          height: '12px', 
          backgroundColor: '#fff', 
          borderRight: '1px solid #e2e8f0', 
          borderTop: '1px solid #e2e8f0' 
        }}></div>
      </div>

      {/* ICON MEDIA SOSIAL */}
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap' // Izinkan icon berbaris rapi
      }}>
        {/* Facebook */}
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" className="share-btn" style={iconBoxStyle('#4a6ea9')}>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </a>

        {/* X (Twitter) */}
        <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" className="share-btn" style={iconBoxStyle('#000')}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>

        {/* Pinterest - INI SUDAH KEMBALI! */}
        <a href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`} target="_blank" className="share-btn" style={iconBoxStyle('#cb2027')}>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.966 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.36 11.985-11.987C24.012 5.387 18.645 0 12.017 0z"/></svg>
        </a>

        {/* WhatsApp */}
        <a href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`} target="_blank" className="share-btn" style={iconBoxStyle('#25D366')}>
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>

        {/* Telegram */}
        <a href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" className="share-btn" style={iconBoxStyle('#239bd8')}>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0C5.353 0 0 5.353 0 11.944c0 6.59 5.353 11.944 11.944 11.944 6.59 0 11.944-5.353 11.944-11.944C23.888 5.353 18.535 0 11.944 0zm5.666 8.351l-1.921 9.053c-.145.638-.523.796-1.057.498l-2.928-2.158-1.412 1.358c-.156.156-.288.288-.589.288l.21-2.977 5.422-4.898c.235-.21-.052-.327-.367-.118l-6.702 4.22-2.883-.902c-.627-.196-.639-.627.131-.928l11.265-4.341c.523-.196.98.118.831.955z"/></svg>
        </a>

        <button onClick={handleCopyLink} className="share-btn" style={iconBoxStyle('#1e2f65')}>
          <LinkIcon size={18} />
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .share-btn:hover {
          transform: translateY(-3px);
          filter: brightness(1.1);
        }
        @media (max-width: 640px) {
          .hide-on-mobile-arrow { display: none; }
        }
      `}} />
    </div>
  );
}