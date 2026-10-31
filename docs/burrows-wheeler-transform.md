# Burrows–Wheeler 변환

# 개요

**Burrows–Wheeler 변환(Burrows–Wheeler transform)** 은 문자열의 글자 순서를 같은 글자가 이어진 덩어리가 많아지도록 바꾸되, 원래 문자열로 되돌릴 수 있게 바꾸는 변환이다. $\mathtt{banana}\char36{}$ 의 순환 이동 $7$ 개를 사전순으로 늘어놓고 각각의 마지막 글자를 모으면 $\mathtt{annb}\char36{}\mathtt{aa}$ 가 되어 같은 글자 $\mathtt{nn}$ 과 $\mathtt{aa}$ 가 붙는다. 이 문자열에서 원래 문자열이 복원되므로, 압축은 덩어리진 문자열에 하고 패턴 검색도 변환된 문자열만으로 한다.

# 직관

본문 $\mathtt{banana}$ 에 끝 글자 $\char36{}$ 를 붙여 $\mathtt{banana}\char36{}$ 를 만들고, 맨 앞 글자를 맨 뒤로 옮기는 순환 이동 $7$ 개를 사전순으로 늘어놓는다. $\char36{}$ 는 어느 글자보다 작다고 둔다.

$$
\char36{}\mathtt{banana},\quad \mathtt a\char36{}\mathtt{banan},\quad \mathtt{ana}\char36{}\mathtt{ban},\quad \mathtt{anana}\char36{}\mathtt b,\quad \mathtt{banana}\char36{},\quad \mathtt{na}\char36{}\mathtt{bana},\quad \mathtt{nana}\char36{}\mathtt{ba}
$$

각 줄의 마지막 글자를 모으면 $\mathtt{annb}\char36{}\mathtt{aa}$ 이다. 줄의 마지막 글자는 원래 본문에서 그 줄의 첫 부분 바로 앞에 오는 글자다. $\mathtt{ana}$ 로 시작하는 두 줄 앞의 글자는 둘 다 $\mathtt n$ 이고, $\mathtt{na}$ 로 시작하는 두 줄 앞의 글자는 둘 다 $\mathtt a$ 다. 영어 본문이라면 $\mathtt{he}$ 로 시작하는 줄들 앞에 $\mathtt t$ 가 몰리는 식으로, 같은 문맥 앞의 글자가 한데 모인다.

# 정의

## 변환

본문 $T=t_0\cdots t_{n-1}$ 에 가장 작은 글자 $\char36{}$ 를 붙인 $T\char36{}$ 의 순환 이동 $n+1$ 개를 사전순으로 정렬해 $(n+1)\times(n+1)$ 글자 표로 놓는다. 이 표의 첫 열을 $F$, 마지막 열을 $L$ 이라 하고, $L$ 을 $T$ 의 Burrows–Wheeler 변환이라 한다. Burrows 와 Wheeler 가 1994 년에 발표했다[^1]. $\char36{}$ 가 한 번만 나오므로 순환 이동의 순서는 접미사의 순서와 같고, [접미사 배열](suffix-arrays.md) $\mathrm{SA}$ 로 다음과 같이 쓴다.

$$
L\lbrack r\rbrack=\begin{cases}t_{\mathrm{SA}\lbrack r\rbrack-1} & \mathrm{SA}\lbrack r\rbrack\ge 1\cr \char36{} & \mathrm{SA}\lbrack r\rbrack=0\end{cases}
$$

예. 직관 절의 표에서 $F=\char36{}\mathtt{aaabnn}$, $L=\mathtt{annb}\char36{}\mathtt{aa}$ 다. $\mathtt{banana}\char36{}$ 의 접미사를 사전순으로 놓으면 시작 위치가 $\mathrm{SA}=(6,5,3,1,0,4,2)$ 이고, 줄 $3$ 은 $\mathrm{SA}\lbrack 3\rbrack=1$ 이므로 $L\lbrack 3\rbrack=t_0=\mathtt b$, 줄 $4$ 는 $\mathrm{SA}\lbrack 4\rbrack=0$ 이므로 $L\lbrack 4\rbrack=\char36{}$ 다.

## LF 사상

글자 $c$ 보다 작은 글자가 $T\char36{}$ 에 나오는 횟수를 $C\lbrack c\rbrack$, $L\lbrack 0\rbrack,\dots,L\lbrack r-1\rbrack$ 가운데 $c$ 의 개수를 $\mathrm{occ}(c,r)$ 이라 한다. 다음 사상을 **LF 사상(last-to-first mapping)** 이라 한다.

$$
\mathrm{LF}(r)=C\lbrack L\lbrack r\rbrack\rbrack+\mathrm{occ}(L\lbrack r\rbrack,r)
$$

예. $\mathtt{banana}\char36{}$ 에서 $C\lbrack\char36{}\rbrack=0$, $C\lbrack\mathtt a\rbrack=1$, $C\lbrack\mathtt b\rbrack=4$, $C\lbrack\mathtt n\rbrack=5$ 다. $L\lbrack 0\rbrack=\mathtt a$ 이고 그 앞에 $\mathtt a$ 가 없으므로 $\mathrm{LF}(0)=1+0=1$ 이다. 줄 $0$ 의 $\char36{}\mathtt{banana}$ 에서 마지막 글자를 맨 앞으로 옮기면 줄 $1$ 의 $\mathtt a\char36{}\mathtt{banan}$ 이 된다.

# 성질

## 역변환

정리. 줄 $r$ 의 순환 이동을 오른쪽으로 한 칸 돌린 것, 곧 마지막 글자를 맨 앞으로 옮긴 것은 줄 $\mathrm{LF}(r)$ 이다. 그래서 $L$ 만으로 $T$ 가 복원된다[^1].

증명의 요지. 마지막 글자가 $c$ 인 줄들을 $Yc$ 꼴로 쓰면, 이 줄들의 순서는 $Y$ 의 사전순이다. 오른쪽으로 돌린 $cY$ 들도 첫 글자가 같으므로 $Y$ 의 사전순으로 놓인다. 그래서 $L$ 에서 $c$ 의 $j$ 번째 출현은 $F$ 에서 $c$ 의 $j$ 번째 출현과 같은 순환 이동이다. $F$ 는 정렬되어 있으므로 그 자리는 $C\lbrack c\rbrack+j-1$ 이다.

줄 $0$ 은 $\char36{}T$ 이고 그 마지막 글자는 $t_{n-1}$ 이다. 줄 $0$ 에서 시작해 $L\lbrack r\rbrack$ 를 앞에 붙이고 $r$ 을 $\mathrm{LF}(r)$ 로 바꾸기를 $n$ 번 하면 $T$ 가 뒤에서부터 나온다. $\mathtt{annb}\char36{}\mathtt{aa}$ 에서는 줄이 $0,1,5,2,6,3$ 의 순서로 바뀌며 $\mathtt a,\mathtt n,\mathtt a,\mathtt n,\mathtt a,\mathtt b$ 가 나와 $\mathtt{banana}$ 가 된다.

```typescript
function inverseBWT(L: string): string {
  const n = L.length;
  const counts = new Map<string, number>();
  const occ: number[] = []; // occ[r] 는 L[0..r-1] 에서 L[r] 의 개수
  for (let r = 0; r < n; r++) {
    occ.push(counts.get(L[r]) ?? 0);
    counts.set(L[r], (counts.get(L[r]) ?? 0) + 1);
  }
  const C = new Map<string, number>();
  let sum = 0;
  for (const c of [...counts.keys()].sort()) {
    C.set(c, sum);
    sum += counts.get(c)!;
  }
  let r = 0;
  let t = "";
  for (let k = 0; k < n - 1; k++) {
    t = L[r] + t;
    r = C.get(L[r])! + occ[r];
  }
  return t; // 끝 글자를 뺀 본문
}
```

## 역방향 검색

정리. $C$ 와 $\mathrm{occ}$ 를 상수 시간에 답하는 자료가 있으면, 패턴 $P=p_1\cdots p_m$ 이 $T$ 에 나타나는 횟수를 $O(m)$ 시간에 센다[^2].

증명의 요지. $P$ 의 접미사 $p_i\cdots p_m$ 으로 시작하는 줄들은 한 구간 $\lbrack s,e)$ 를 이룬다. 그 앞에 $c=p_{i-1}$ 을 붙인 $cp_i\cdots p_m$ 으로 시작하는 줄들은, 구간 안에서 $L$ 이 $c$ 인 줄들을 LF 사상으로 보낸 것이므로 구간 $\lbrack C\lbrack c\rbrack+\mathrm{occ}(c,s),\thinspace C\lbrack c\rbrack+\mathrm{occ}(c,e))$ 다. $p_m$ 부터 $p_1$ 까지 $m$ 번 갱신하면 마지막 구간의 길이가 나타난 횟수다.

$\mathtt{banana}$ 에서 $\mathtt{ana}$ 를 세면 구간이 $\mathtt a$ 에서 $\lbrack 1,4)$, $\mathtt{na}$ 에서 $\lbrack 5,7)$, $\mathtt{ana}$ 에서 $\lbrack 2,4)$ 로 바뀌고, 길이 $2$ 가 나타난 횟수다.

# 활용

- 압축. 변환한 문자열에 앞으로 옮기기 부호화(move-to-front coding)를 하면 같은 글자의 덩어리가 작은 수의 덩어리가 되고, 그 수열을 [무손실 부호화 정리](source-coding.md)의 엔트로피 부호로 줄인다. bzip2 가 이 방식이다. 압축 길이는 본문의 $k$ 차 경험적 엔트로피(empirical entropy)로 위에서 묶인다[^3].
- 압축된 색인. Ferragina–Manzini 색인(FM-index)은 변환한 문자열과 $\mathrm{occ}$ 를 답하는 압축 자료만 저장하고 역방향 검색으로 패턴을 센다. 접미사 배열의 일부를 함께 두면 나타난 위치도 찾는다[^2]. 유전체 서열을 기준 유전체에 맞추는 정렬 도구 BWA(Burrows–Wheeler Aligner)와 Bowtie 가 이 색인을 쓴다.

[^1]: M. Burrows, D. J. Wheeler, "A block-sorting lossless data compression algorithm", Technical Report 124, Digital Equipment Corporation, 1994.
[^2]: P. Ferragina, G. Manzini, "Opportunistic data structures with applications", FOCS 2000, 390–398.
[^3]: G. Manzini, "An analysis of the Burrows–Wheeler transform", Journal of the ACM 48 (2001), 407–430.

# 연관 문서

## 선수지식

- [접미사 배열](suffix-arrays.md)

## 더 알아보기

아직 연결한 문서가 없다.

#data_structures #algorithms #information_theory
