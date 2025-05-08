/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums: number[], target: number): number[] {
  const numToIndex = new Map(); // Mapeia valor -> índice

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i]; // Achou o par
    }

    numToIndex.set(nums[i], i); // Armazena o valor atual com seu índice
  }
  
  return []; // Retorna array vazio se nenhum par for encontrado
};
