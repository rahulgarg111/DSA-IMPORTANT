//simple merge sort logic mostly 

let count = 0
function merge(arr,low,mid,high){
	let ans = []
	let i=low
	let j = mid+1
	while(i<=mid&&j<=high){
		if(arr[i]<=arr[j]){
			ans.push(arr[i])
			i++
		}
		else {
		  count += mid-i+1
			ans.push(arr[j])
			j++
		}
	}
	while(i<=mid){
		ans.push(arr[i])
			i++
	}
	while(j<=high){
		ans.push(arr[j])
			j++
	}
	for(let k = 0 ; k<ans.length ; k++){
		arr[low+k]=ans[k]
	}
}
function divide(arr,low,high){
  
	if(low>=high)return 
	let mid = Math.floor((low+high)/2)
	divide(arr,low,mid)
	divide(arr,mid+1,high)
	merge(arr,low,mid,high)
}
function mergeSort(arr){
  count = 0
 divide(arr,0,arr.length-1)
 return arr
}