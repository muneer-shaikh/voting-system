let addCandidateBtn = document.getElementById("addCandidateBtn");
        let candidateInput = document.getElementById("candidateInput");
        let candidates = ["Waqaar", "Ahmed", "abdullah", "Anas", "Arshad"];

        addCandidateBtn.addEventListener("click", () => {
            candidates.push(candidateInput.value);
            candidateInput.value = "";
            displayCandidates();
        });

        function displayCandidates() {
            var candidatesTable = document.getElementById("candidatesTable");
            candidatesTable.innerHTML = "";

            candidates.forEach((candidate, index) => {
                var row = document.createElement("tr");

                var nameCell = document.createElement("td");
                nameCell.textContent = candidate;

                var indexCell = document.createElement("td");
                indexCell.textContent = index + 1;

                var voteCell = document.createElement("td");
                voteCell.textContent = 0;

                row.appendChild(indexCell);
                row.appendChild(nameCell);
                row.appendChild(voteCell);

                row.addEventListener("click", () => {
                    voteCell.innerHTML++;
                });

                candidatesTable.appendChild(row);
            });
        }

        displayCandidates();