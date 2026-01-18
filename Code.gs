// ===================================================
// GOOGLE APPS SCRIPT - CBT SMKN 1 MALUKU TENGAH
// Copy script ini ke Google Apps Script
// ===================================================

function doPost(e) {
  try {
    // Ambil Sheet aktif
    const ss = SpreadsheetApp.openById('1WjgK6XMiutJ1GSUn_fy2bybZiWlCnK3KXTTNAPjNrwE');
    const sheet = ss.getSheetByName('Sheet1'); // Ganti 'Sheet1' jika nama sheet berbeda
    
    // Parse data dari request
    const data = JSON.parse(e.postData.contents);
    
    // Format waktu Indonesia
    const timestamp = Utilities.formatDate(new Date(), "Asia/Jakarta", "dd/MM/yyyy HH:mm:ss");
    
    // Data yang akan disimpan
    const row = [
      timestamp,
      data.nama,
      data.skorBenar,
      data.totalSoal,
      data.nilai,
      data.statusCurang
    ];
    
    // Tambahkan data ke baris baru
    sheet.appendRow(row);
    
    // Response sukses
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data berhasil disimpan',
      timestamp: timestamp
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Response error
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Fungsi untuk test (opsional)
function doGet(e) {
  return ContentService.createTextOutput('✅ Google Apps Script CBT SMKN 1 Maluku Tengah - Ready!');
}

// Fungsi untuk membuat header otomatis (jalankan sekali saja)
function setupHeader() {
  const ss = SpreadsheetApp.openById('1WjgK6XMiutJ1GSUn_fy2bybZiWlCnK3KXTTNAPjNrwE');
  const sheet = ss.getSheetByName('Sheet1');
  
  // Cek apakah header sudah ada
  if(sheet.getRange('A1').getValue() === '') {
    const headers = ['Timestamp', 'Nama Siswa', 'Skor Benar', 'Total Soal', 'Nilai', 'Status'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format header
    sheet.getRange(1, 1, 1, headers.length)
      .setBackground('#0B3C5D')
      .setFontColor('#FFFFFF')
      .setFontWeight('bold')
      .setHorizontalAlignment('center');
    
    // Auto-resize kolom
    sheet.autoResizeColumns(1, headers.length);
    
    Logger.log('✅ Header berhasil dibuat!');
  } else {
    Logger.log('⚠️ Header sudah ada, tidak perlu dibuat lagi.');
  }
}