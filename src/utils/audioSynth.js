// Web Audio API ambient soundscape generator for Kundan Arvaana (Ikigai Japanese Zen ambience)

let audioCtx = null;
let isPlaying = false;
let masterGain = null;
let intervalId = null;

export function toggleAmbientSound(onStateChange) {
  if (isPlaying) {
    stopAmbientSound();
    if (onStateChange) onStateChange(false);
    return false;
  } else {
    startAmbientSound();
    if (onStateChange) onStateChange(true);
    return true;
  }
}

export function isSoundActive() {
  return isPlaying;
}

export function startAmbientSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;

    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 3);
    masterGain.connect(audioCtx.destination);

    // Create subtle warm harmonic drone (C3 and G3 warm chord)
    playDroneNote(130.81, 0.05); // C3
    playDroneNote(196.00, 0.04); // G3
    playDroneNote(261.63, 0.03); // C4
    playDroneNote(392.00, 0.02); // G4

    // Periodic gentle Tibetan bell / Zen chime
    const zenPentatonicFrequencies = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50]; // C, D, E, G, A, C5
    intervalId = setInterval(() => {
      if (!isPlaying || !audioCtx) return;
      const freq = zenPentatonicFrequencies[Math.floor(Math.random() * zenPentatonicFrequencies.length)];
      triggerZenChime(freq);
    }, 4500);

    isPlaying = true;
    return true;
  } catch (e) {
    console.error("Audio synth error:", e);
    return false;
  }
}

export function stopAmbientSound() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (masterGain && audioCtx) {
    try {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.5);
      setTimeout(() => {
        if (audioCtx && audioCtx.state !== 'closed') {
          audioCtx.suspend();
        }
      }, 1600);
    } catch {
      // ignore
    }
  }
  isPlaying = false;
}

function playDroneNote(frequency, gainValue) {
  if (!audioCtx || !masterGain) return;
  const osc = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  // Subtle slow vibrato for organic air movement
  const lfo = audioCtx.createOscillator();
  const lfoGain = audioCtx.createGain();
  lfo.frequency.setValueAtTime(0.2, audioCtx.currentTime); // slow breathing
  lfoGain.gain.setValueAtTime(0.5, audioCtx.currentTime);
  lfo.connect(osc.frequency);
  lfo.start();

  noteGain.gain.setValueAtTime(gainValue, audioCtx.currentTime);
  osc.connect(noteGain);
  noteGain.connect(masterGain);
  osc.start();
}

function triggerZenChime(frequency) {
  if (!audioCtx || !masterGain) return;
  const osc = audioCtx.createOscillator();
  const chimeGain = audioCtx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  const now = audioCtx.currentTime;
  chimeGain.gain.setValueAtTime(0.0001, now);
  chimeGain.gain.linearRampToValueAtTime(0.04, now + 0.08); // gentle attack
  chimeGain.gain.exponentialRampToValueAtTime(0.00001, now + 4.0); // long organic metallic decay

  osc.connect(chimeGain);
  chimeGain.connect(masterGain);
  osc.start(now);
  osc.stop(now + 4.2);
}
