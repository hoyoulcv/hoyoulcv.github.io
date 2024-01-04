// (1) research interest
const toggleButton0 = document.getElementById('toggleButton0');
const foldableContent0 = document.getElementById('foldableContent0');
// (2) education unm
const toggleButton1 = document.getElementById('toggleButton1');
const foldableContent1 = document.getElementById('foldableContent1');
// (2) education cnu
const toggleButton2 = document.getElementById('toggleButton2');
const foldableContent2 = document.getElementById('foldableContent2');

// (3) work-whitebrew
const toggleButton3 = document.getElementById('toggleButton3');
const foldableContent3 = document.getElementById('foldableContent3');
// (4) P&C
const toggleButton4 = document.getElementById('toggleButton4');
const foldableContent4 = document.getElementById('foldableContent4');
// (5) Dae eun
const toggleButton5 = document.getElementById('toggleButton5');
const foldableContent5 = document.getElementById('foldableContent5');

// (6) Dae eun
   const toggleButton6 = document.getElementById('toggleButton6');
const foldableContent6 = document.getElementById('foldableContent6');
// (7) Dae eun
   const toggleButton7 = document.getElementById('toggleButton7');
const foldableContent7 = document.getElementById('foldableContent7');
// (8) Dae eun
   const toggleButton8 = document.getElementById('toggleButton8');
const foldableContent8 = document.getElementById('foldableContent8');
// (8) Dae eun
   const toggleButton9 = document.getElementById('toggleButton9');
const foldableContent9 = document.getElementById('foldableContent9');
// (8) Dae eun
const toggleButton10 = document.getElementById('toggleButton10');
const foldableContent10 = document.getElementById('foldableContent10');

const toggleButton11 = document.getElementById('toggleButton11');
const foldableContent11 = document.getElementById('foldableContent11');

const toggleButton12 = document.getElementById('toggleButton12');
const foldableContent12 = document.getElementById('foldableContent12');


   // 버튼 클릭 시 이벤트 리스너 추가
   toggleButton0.addEventListener('click', function () {
     toggleFoldableContent(foldableContent0);
   });
   
   // 버튼 클릭 시 이벤트 리스너 추가
   toggleButton1.addEventListener('click', function () {
     toggleFoldableContent(foldableContent1);
   });
   // 버튼 클릭 시 이벤트 리스너 추가
   toggleButton2.addEventListener('click', function () {
     toggleFoldableContent(foldableContent2);
   });

   // // 버튼 클릭 시 이벤트 리스너 추가
   toggleButton3.addEventListener('click', function () {
     toggleFoldableContent(foldableContent3);
   });
   // // 버튼 클릭 시 이벤트 리스너 추가
   toggleButton4.addEventListener('click', function () {
     toggleFoldableContent(foldableContent4);
   });

   toggleButton5.addEventListener('click', function () {
     toggleFoldableContent(foldableContent5);
   });
   toggleButton6.addEventListener('click', function () {
       toggleFoldableContent(foldableContent6);
   });
   toggleButton7.addEventListener('click', function () {
     toggleFoldableContent(foldableContent7);
   });
   toggleButton8.addEventListener('click', function () {
     toggleFoldableContent(foldableContent8);
   });
   toggleButton9.addEventListener('click', function () {
     toggleFoldableContent(foldableContent9);
   });
   toggleButton10.addEventListener('click', function () {
     toggleFoldableContent(foldableContent10);
   });
   toggleButton11.addEventListener('click', function () {
     toggleFoldableContent(foldableContent11);
   });

   toggleButton12.addEventListener('click', function () {
     toggleFoldableContent(foldableContent12);
   });
   
   
   // 폴딩 내용 토글 함수
   function toggleFoldableContent(content) {
     // 현재 내용이 표시되어 있다면 숨기고, 숨겨져 있다면 표시합니다.
     if (content.style.display === 'none' || content.style.display === '') {
       content.style.display = 'block';
     } else {
       content.style.display = 'none';
     }
   }

   // 테이블 생성 함수
   function createTable(containerId, data) {
     const container = document.getElementById(containerId);
     const table = document.createElement('table');

     // 테이블 헤더 생성
     const thead = document.createElement('thead');
     const headerRow = document.createElement('tr');
     data.headers.forEach(headerText => {
       const headerCell = document.createElement('th');
       headerCell.textContent = headerText;
       headerRow.appendChild(headerCell);
     });
     thead.appendChild(headerRow);
     table.appendChild(thead);

     // 테이블 바디 생성
     const tbody = document.createElement('tbody');
     data.rows.forEach(rowData => {
       const row = document.createElement('tr');
       rowData.forEach(cellData => {
         const cell = document.createElement('td');
         cell.textContent = cellData;
         row.appendChild(cell);
       });
       tbody.appendChild(row);
     });
     table.appendChild(tbody);

     // 컬럼 너비 설정
     const colgroup = document.createElement('colgroup');
     data.columnWidths.forEach(width => {
       const col = document.createElement('col');
       col.style.width = width;
       colgroup.appendChild(col);
     });
     table.appendChild(colgroup);

     // 테이블을 컨테이너에 추가
     container.appendChild(table);
   }

   // 데이터 정의
   const unmTranscriptData = {
     headers: ['Subject', 'Grade'],
     rows: [
       ['CS530- Geometric & Probability Method in CS', 'A'],
       ['CS561- Algorithms & Data Structure', 'A'],
       ['CS585- Computer Network', 'A'],
       ['CS527- Intro to Ai', 'C, A'],
       ['CS580- Specifications of Software system', 'B+'],
       ['CS547- Neural Networks', 'B+'],
       ['CS531- Pattern Recognition', 'B+'],
       ['CS558- Software Foundations', 'B+'],
       ['CS591- Logical Reasoning & Proofs ', 'B'],              
       ['CS529- Introduction Machine Learning', 'B-'],                     
       // 필요한 만큼 데이터 추가
     ],
     columnWidths: ['70%', '30%']
   };

   const cnuTranscriptData = {
     headers: ['Subject', 'Grade'],
     rows: [
       ['Digital Circuit', 'A+'],
       ['Digital Circuit Lab', 'A+'],
       ['System Programming', 'A+'],
       ['Fundametal Mathematics', 'A0'],
       ['Computer Architectures1 ', 'A+'],
       ['Electric & Electronic Lab', 'A+'],
       ['System Software', 'A+'],
       ['Computer Networks ', 'A+'],              
       ['...', '...'],                     
       // 필요한 만큼 데이터 추가
     ],
     columnWidths: ['70%', '30%']
   };
   
   // 테이블 생성 및 삽입
   createTable('unmTranscriptTable', unmTranscriptData);
   createTable('cnuTranscriptTable', cnuTranscriptData);   
