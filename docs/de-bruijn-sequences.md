# de Bruijn 수열

# 개요

**de Bruijn 수열(de Bruijn sequence)** 은 글자가 $k$ 개인 알파벳 위의 길이 $k^n$ 인 순환 수열로, 길이 $n$ 인 문자열이 모두 연속한 부분열로 정확히 한 번씩 나타나는 것이다. 이진 알파벳에서 $n=3$ 이면 $00010111$ 이 그런 수열이고, 끝에서 처음으로 이어 읽으면 $000,001,010,101,011,111,110,100$ 이 한 번씩 나온다.

길이 $n-1$ 인 문자열을 정점으로 둔 유향 그래프의 [Euler 회로](eulerian-circuits.md)가 de Bruijn 수열을 주므로 모든 $k,n$ 에 대해 존재하고, 그 개수는 $(k!)^{k^{n-1}}/k^n$ 이다. 이진 경우는 C. Flye Sainte-Marie 가 1894 년에, N. G. de Bruijn 이 1946 년에 각각 셌다[^1][^2].

# 직관

세 자리 이진 비밀번호로 열리는 문이 있고, 문은 마지막으로 누른 세 자리가 비밀번호와 같으면 열린다. 비밀번호 후보 $8$ 개를 하나씩 따로 누르면 $24$ 번을 누른다. 앞 후보의 끝 두 자리를 다음 후보의 앞 두 자리로 다시 쓰면 한 번 누를 때마다 새 후보 하나를 시험한다.

누를 때마다 바뀌는 것은 마지막 두 자리다. 마지막 두 자리를 상태로 두면 상태는 $00,01,10,11$ 넷이고, 상태 $ab$ 에서 $c$ 를 누르면 후보 $abc$ 를 시험하고 상태가 $bc$ 로 옮겨 간다. 후보 하나가 상태 사이의 화살표 하나이므로, 후보를 전부 한 번씩 시험하는 것은 화살표를 전부 한 번씩 지나는 것이다. 상태마다 나가는 화살표가 $2$ 개, 들어오는 화살표가 $2$ 개라서 그런 길이 있고, 그 길에서 누른 자리를 이으면 $00010111$ 같은 수열이 나온다. 처음 상태를 만드는 두 번을 더해 $10$ 번이면 문이 열린다.

# 정의

## de Bruijn 수열

알파벳 $A$ 의 크기를 $k$ 라 한다. 길이 $k^n$ 인 수열 $a_0a_1\cdots a_{k^n-1}$ 에서 첨자를 $k^n$ 으로 나눈 나머지로 읽을 때, $A^n$ 의 모든 원소가 $a_ia_{i+1}\cdots a_{i+n-1}$ ($0\le i\lt k^n$) 꼴로 정확히 한 번씩 나타나면 이 수열을 차수 $n$ 의 de Bruijn 수열이라 하고 그 집합을 $B(k,n)$ 으로 쓴다. 순환 이동으로 같아지는 수열은 같은 것으로 본다.

## de Bruijn 그래프

**de Bruijn 그래프(de Bruijn graph)** $G(k,m)$ 은 정점 집합이 $A^m$ 이고, 각 $x_1\cdots x_{m+1}\in A^{m+1}$ 에 대해 $x_1\cdots x_m$ 에서 $x_2\cdots x_{m+1}$ 로 가는 변 하나를 둔 유향 그래프다. 정점이 $k^m$ 개, 변이 $k^{m+1}$ 개이고, 모든 정점의 들어오는 차수와 나가는 차수가 $k$ 다. 정점 $0\cdots 0$ 처럼 자기 자신으로 가는 고리도 변이다.

# 성질

## 존재

정리. 모든 $k\ge 1$, $n\ge 1$ 에 대해 $B(k,n)$ 은 공집합이 아니다.

증명의 요지. $G(k,n-1)$ 은 모든 정점에서 들어오는 차수와 나가는 차수가 같고, 아무 정점에서 한 글자씩 바꿔 가며 다른 정점으로 갈 수 있으므로 강하게 연결되어 있다. 유향 Euler 정리에 따라 Euler 회로가 있다. 회로가 지나는 변 $k^n$ 개는 $A^n$ 의 원소 전체이고, 연이은 두 변은 길이 $n-1$ 의 겹침으로 이어지므로, 각 변의 마지막 글자를 차례로 적으면 de Bruijn 수열이다. 역으로 de Bruijn 수열은 $G(k,n-1)$ 의 Euler 회로를 준다.

## 개수

정리. $\lvert B(k,n)\rvert=(k!)^{k^{n-1}}/k^n$ 이다. 이진 경우는 $2^{2^{n-1}-n}$ 이다.

증명의 요지. de Bruijn 수열과 $G(k,n-1)$ 의 Euler 회로가 일대일로 대응하므로 Euler 회로를 센다. de Bruijn, van Aardenne-Ehrenfest, Smith, Tutte 의 머리글자를 딴 BEST 정리(BEST theorem)는 회로의 수를 $t_w\prod_v(\deg^+(v)-1)!=t_w\thinspace\big((k-1)!\big)^{k^{n-1}}$ 로 준다. $t_w$ 는 한 정점 $w$ 로 모이는 [유향 신장트리](arborescences.md)의 수이고, 행렬-트리 정리(matrix-tree theorem)로 계산하면 $t_w=k^{k^{n-1}-n}$ 이다. 곱하면 위 식이다[^3].

## Lyndon 단어의 이어 붙이기

자기의 모든 진짜 순환 이동보다 사전순으로 엄격히 작은 문자열이 [Lyndon 단어](lyndon-words.md)다. 길이가 $n$ 의 약수인 Lyndon 단어를 사전순으로 늘어놓아 이어 붙이면 사전순으로 가장 작은 de Bruijn 수열이 나온다[^4]. $k=2$, $n=3$ 에서 길이가 $1$ 또는 $3$ 인 Lyndon 단어는 $0,001,011,1$ 이고, 이어 붙이면 $00010111$ 이다.

```typescript
// FKM 알고리즘(Fredricksen, Kessler, Maiorana). 길이가 n 의 약수인 Lyndon 단어를 사전순으로 생성하며 이어 붙인다.
function deBruijn(k: number, n: number): number[] {
  const a = new Array<number>(n + 1).fill(0);
  const seq: number[] = [];
  function gen(t: number, p: number): void {
    if (t > n) {
      if (n % p === 0) for (let i = 1; i <= p; i++) seq.push(a[i]); // a[1..p] 가 길이 p 인 Lyndon 단어
      return;
    }
    a[t] = a[t - p];
    gen(t + 1, p);
    for (let c = a[t - p] + 1; c < k; c++) {
      a[t] = c;
      gen(t + 1, t);
    }
  }
  gen(1, 1);
  return seq; // 길이 k^n
}
```

## 최대 길이 선형 귀환 수열

[유한체](finite-fields.md) $\mathbb F_2$ 위의 차수 $n$ 원시 다항식으로 정한 선형 점화식 $s_{i+n}=c_{n-1}s_{i+n-1}+\cdots+c_0s_i$ 는 영이 아닌 초깃값에서 주기 $2^n-1$ 인 수열을 낸다. 한 주기 안에 영이 아닌 길이 $n$ 문자열이 모두 한 번씩 나오고 $0\cdots 0$ 만 빠지므로, $n-1$ 개의 $0$ 이 이어진 자리에 $0$ 하나를 더 넣으면 de Bruijn 수열이 된다. 이 수열을 **최대 길이 수열(maximum length sequence, m-sequence)** 이라 하고, [선형 되먹임 자리이동 레지스터](linear-feedback-shift-registers.md)로 한 글자에 상수 시간에 생성한다.

# 활용

- 위치 인식. 길이 $n$ 의 창으로 수열의 어느 자리를 보고 있는지가 정해지므로, 바닥이나 띠에 de Bruijn 수열을 인쇄해 카메라나 펜이 읽은 $n$ 글자로 절대 위치를 얻는다. 구조광 3 차원 측정에서 투영 무늬의 줄 번호를 가리는 데도 쓴다.
- 유전체 조립. 짧게 읽은 조각을 길이 $m+1$ 의 부분 문자열로 자르고 $G(k,m)$ 의 부분그래프를 만들면 원래 서열이 그 그래프의 Euler 트레일로 나타난다.
- 비트 연산. $64$ 비트 정수에서 가장 낮은 $1$ 비트의 위치를 찾을 때, 그 비트만 남긴 값에 $B(2,6)$ 의 상수를 곱하고 위 $6$ 비트를 표의 첨자로 쓴다.
- 의사난수 수열. 최대 길이 수열은 길이 $n$ 창의 분포가 균등에 가까워 확산 스펙트럼 통신과 측정 신호에 쓰인다. 점화식이 선형이라 [Berlekamp–Massey 알고리즘](berlekamp-massey.md)이 $2n$ 항으로 복원하므로 암호용 키 수열로는 쓰지 않는다.

[^1]: C. Flye Sainte-Marie, "Question 48", L'Intermédiaire des Mathématiciens 1 (1894), 107–110.
[^2]: N. G. de Bruijn, "A combinatorial problem", Proceedings of the Koninklijke Nederlandse Akademie van Wetenschappen 49 (1946), 758–764.
[^3]: T. van Aardenne-Ehrenfest, N. G. de Bruijn, "Circuits and trees in oriented linear graphs", Simon Stevin 28 (1951), 203–217.
[^4]: H. Fredricksen, J. Maiorana, "Necklaces of beads in k colors and k-ary de Bruijn sequences", Discrete Mathematics 23(3) (1978), 207–210.

# 연관 문서

## 선수지식

- [Euler 회로](eulerian-circuits.md)

## 더 알아보기

아직 연결한 문서가 없다.

#graph_theory #combinatorics #algorithms
