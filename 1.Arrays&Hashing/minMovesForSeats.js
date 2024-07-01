//https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/?envType=daily-question&envId=2024-06-13



var minMovesToSeat = function(seats, students) {
    const pos = new Array(100).fill(0);
    const n = seats.length;
        for(let i = 0; i < n; i++){
            pos[seats[i]]++;
            pos[students[i]]--;
        }
        let res = 0;
        let current = 0;
        for(const i of pos){
            res += Math.abs(current);
            current += i;
        }
        return res;
};