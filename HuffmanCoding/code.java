package HuffmanCoding;
import java.util.Comparator;
import java.util.HashMap;
import java.util.PriorityQueue;
class table
{
	char c;
	int frequency;
	table left;
	table right;
	
	table(char c,int frequency)
	{
		this.c=c;
		this.frequency=frequency;
	}
}
class BinaryTreeNode
{
	char c;
	int sum;
	BinaryTreeNode left;
	BinaryTreeNode right;
	BinaryTreeNode(char c,int sum)
	{
		this.c=c;
		this.sum=sum;
	}
}
class tableComparator implements Comparator<table>{
    
    public int compare(table t1, table t2) {
    	if (t1.frequency > t2.frequency)
            return 1;
        else if (t1.frequency < t2.frequency)
            return -1;
        return 0;
    }
        }



public class code {

	public HashMap<Character,Integer> frequency(String s)
	{
		HashMap<Character,Integer> map=new HashMap<>();
		for(int i=0;i<s.length();i++)
		{
			if(map.containsKey(s.charAt(i)))
			{
				map.put(s.charAt(i),map.get(s.charAt(i))+1);
			}
			else
			{
				map.put(s.charAt(i), 1);
			}
		}
		return map;
	}
	public PriorityQueue<table> maintain(HashMap<Character,Integer>map)
	{
		PriorityQueue<table>  q =new PriorityQueue<>(map.size(),new tableComparator());
		for (Character key: map.keySet())
		{
			table t=new table(key,map.get(key));
			q.add(t);
		}
		return q;
	}
	public void leafNode(table root,String pattern,HashMap<String,Character>arr,HashMap<Character,String>arr1)
	{
	if(root.left==null && root.right==null) {
		arr.put(pattern,root.c);
		arr1.put(root.c, pattern);
		System.out.println(root.c+"=="+pattern);
		return ;
	}
	leafNode(root.left,pattern+"0",arr,arr1);
	leafNode(root.right,pattern+"1",arr,arr1);
	}
	public String decompress(table root,String a,HashMap<String, Character>arr)
	{
		String decode="";
		int last=0;
		for(int i=0;i<a.length();i++)
		{
		if(arr.containsKey(a.subSequence(last,i+1)))	
		{
			System.out.println("sub"+a.subSequence(last,i+1)+arr.get(a.subSequence(last,i+1)));
			
			decode+=arr.get(a.subSequence(last,i+1));last=i+1;
		}
		}
		return decode;
	}
}
