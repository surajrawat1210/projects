package HuffmanCoding;

import java.util.HashMap;
import java.util.PriorityQueue;

public class codecheck {
	
	public static void main(String[] args) {
		code c=new code();
//		String s="abacacdefddedabac";
		String s="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbccccccccdddddddddddddddgggggggggggggggggggggggggxxxxzz";
//		String s="go go gophers";
		HashMap<Character,Integer>map=c.frequency(s);
		System.out.println(map);
		PriorityQueue<table> q=c.maintain(map);
		table t1=new table('\0',0);
		while(q.size()!=1) {
			table temp1=q.peek();
			q.poll();
			System.out.println("temp1"+temp1.c);
			table temp2=q.peek();
			q.poll();
			System.out.println("temp2"+temp2.c);
			int sum=temp1.frequency+temp2.frequency;
			t1=new table('\0',sum);
			t1.left=temp1;
			t1.right=temp2;
			q.add(t1);
			
//			System.out.println(q.peek().c);
//			q.poll();	
}
		System.out.println(t1.frequency);
		HashMap<String ,Character>decompress=new HashMap<>();
		HashMap<Character,String>compress=new HashMap<>();
		c.leafNode(t1,"",decompress,compress);
		System.out.println(compress);
		System.out.println(decompress);
		String code="";
		for(int i=0;i<s.length();i++)
		{
			code+=compress.get(s.charAt(i));	
		}
		System.out.println("code"+code);
		System.out.println("suraj".subSequence(0, 1));
		String s1=c.decompress(t1, code, decompress);
		System.out.println(s1);
//		System.out.println(s1);
}
}
