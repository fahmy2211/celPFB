function generate() {
    const nBytes = new Uint8Array(8); // 8 random bytes
    window.crypto.getRandomValues(nBytes);
    const namespace_id = Array.from(nBytes, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
  
    const lenMsg = Math.floor(Math.random() * 100);
    const msgBytes = new Uint8Array(lenMsg);
    window.crypto.getRandomValues(msgBytes);
    const message = Array.from(msgBytes, (byte) =>
      byte.toString(16).padStart(2, "0")
    ).join("");
  
    document.getElementById("namespace_id").value = namespace_id;
    document.getElementById("message").value = message;
  }