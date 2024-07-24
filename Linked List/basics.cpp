#include<bits/stdc++.h>
using namespace std;
class Node{
    public:
    int data;
    Node* next;

    public:
    Node(int data1,Node* next1){
        data=data1;
        next=next1;

    }
    Node(int data1){
        data=data1;
        next=nullptr;
    }
};
Node* convertArraytoLL(vector<int> &arr){
    Node* head=new Node(arr[0]);
    Node* mover=head;
    for(int i=1;i<arr.size();i++){
        Node*temp=new Node(arr[i]);
        mover->next=temp;
        mover=temp;
    }
    return head;
}
int lengthLL(Node* head){
    int count=0;
    Node* temp=head;
    while(temp){
        temp=temp->next;
        count++;
    }
    return count;
}
int isPresent(Node* head,int val){
    Node* temp=head;
    while(temp){
        if(temp->data==val){
            return 1;
            temp=temp->next;
        }
        return 0;
    }
}
int main(){
    vector<int>arr={15,3,4,66,8,9};
    Node* head=convertArraytoLL(arr);
 
    cout<<isPresent(head,15);

}
