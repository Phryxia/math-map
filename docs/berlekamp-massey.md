# Berlekamp–Massey 알고리즘

# 개요

**Berlekamp–Massey 알고리즘(Berlekamp–Massey algorithm)** 은 [체](fields.md) $F$ 위의 유한 수열 $s_0,\dots,s_{N-1}$ 을 만족하는 상수 계수 선형 점화식 가운데 길이가 가장 짧은 것을 $O(N^2)$ 번의 체 연산으로 찾는 알고리즘이다. 점화식을 한 항씩 늘려 가며 확인하고, 틀린 항이 나오면 앞서 틀렸던 점화식의 배수를 더해 고친다.

E. Berlekamp 가 [BCH 부호](bch-codes.md)(Bose–Chaudhuri–Hocquenghem code)의 복호를 위해 만들었고, J. Massey 가 선형 되먹임 자리이동 레지스터(linear feedback shift register, LFSR)의 합성 문제로 다시 읽어 최소 길이의 증명을 붙였다.[^1]

# 직관

수열 $1,1,2,3,5$ 를 만족하는 가장 짧은 점화식을 찾는다. 길이 $1$ 인 점화식 $s_j=cs_{j-1}$ 은 $s_1=cs_0$ 에서 $c=1$ 이고, $s_j-s_{j-1}=0$ 은 $s_1$ 까지 맞는다. $j=2$ 에서 $s_2-s_1=1$ 이 $0$ 이 아니므로 틀린다. 이 차이 $1$ 을 **불일치(discrepancy)** 라 부른다.

점화식을 처음부터 다시 풀지 않고 고친다. 길이 $0$ 인 점화식 $s_j=0$ 은 $j=0$ 에서 불일치 $s_0=1$ 로 틀렸다. 이 식을 두 칸 밀면 $s_{j-2}=0$ 이 되고 $j=2$ 에서 불일치가 $s_0=1$ 이다. 지금 식에서 이것을 빼면

$$
(s_j-s_{j-1})-s_{j-2}=0
$$

이고, $j=2$ 에서 두 불일치가 지워진다. $j\lt 2$ 에서는 민 식이 아무 항도 건드리지 않으므로 지금 식이 맞던 자리가 그대로 맞는다. $s_j=s_{j-1}+s_{j-2}$ 는 $s_3=3$, $s_4=5$ 도 맞으므로 답이다. 다항식으로 쓰면 $1-x$ 에서 $x^2\cdot 1$ 을 빼어 $1-x-x^2$ 을 얻었다. [생성함수](generating-functions.md)로 보면 이 다항식은 [Fibonacci 수](fibonacci-numbers.md)의 생성함수 $x/(1-x-x^2)$ 의 분모다.

# 정의

## 선형 복잡도

다항식 $C(x)=1+c_1x+\dots+c_Lx^L\in F\lbrack x\rbrack$ 와 길이 $L$ 의 쌍 $(C,L)$ 이

$$
s_j+c_1s_{j-1}+\dots+c_Ls_{j-L}=0\qquad(L\le j\le N-1)
$$

을 만족하면 $(C,L)$ 이 $s_0,\dots,s_{N-1}$ 을 **생성한다** 고 한다. $C$ 를 연결 다항식(connection polynomial)이라 하고, $\deg C\le L$ 이다. 수열을 생성하는 $L$ 의 최솟값을 그 수열의 **선형 복잡도(linear complexity)** $\mathcal L_N$ 이라 한다. 앞의 $L$ 항은 조건이 없으므로 $\mathcal L_N\le N$ 이다.

## 알고리즘

$n$ 번째 단계에서 현재 쌍 $(C,L)$ 로 불일치

$$
d_n=s_n+\sum_{i=1}^{L}c_is_{n-i}
$$

를 계산한다. $B$ 는 길이가 마지막으로 바뀌기 직전의 연결 다항식이고, $b$ 는 그때의 불일치, $k$ 는 그 뒤로 지난 단계 수다.

- $d_n=0$ 이면 $(C,L)$ 을 그대로 둔다.
- $d_n\ne 0$ 이면 $C\leftarrow C-(d_n/b)x^kB$ 로 고친다. 이때 $2L\le n$ 이면 길이를 $L\leftarrow n+1-L$ 로 늘리고, 고치기 전의 $C$ 와 $d_n$ 을 새 $B$ 와 $b$ 로 둔다.

```javascript
// F 는 체의 연산 { zero, one, add, sub, mul, div, isZero } 을 담는다.
function berlekampMassey(s, F) {
  let C = [F.one], B = [F.one], L = 0, k = 1, b = F.one;
  for (let n = 0; n < s.length; n++) {
    let d = s[n];
    for (let i = 1; i <= L; i++) d = F.add(d, F.mul(C[i] ?? F.zero, s[n - i]));
    if (F.isZero(d)) { k++; continue; }
    const coef = F.div(d, b);
    const T = C.slice();
    for (let i = 0; i < B.length; i++) {
      C[i + k] = F.sub(C[i + k] ?? F.zero, F.mul(coef, B[i]));
    }
    if (2 * L <= n) { L = n + 1 - L; B = T; b = d; k = 1; } else { k++; }
  }
  return { C, L };
}
```

# 성질

## Massey 의 길이 정리

**정리.** $(C,L)$ 이 $s_0,\dots,s_{N-1}$ 을 생성하지만 $s_0,\dots,s_N$ 은 생성하지 않으면, $s_0,\dots,s_N$ 을 생성하는 모든 쌍의 길이는 $N+1-L$ 이상이다. 그러므로 $\mathcal L_{N+1}\ge\max(\mathcal L_N,N+1-\mathcal L_N)$ 이다.[^1]

증명의 요지. $(C',L')$ 이 $s_0,\dots,s_N$ 을 생성하고 $L'\le N-L$ 이라 하자. $s_N$ 을 $C$ 로 앞의 $L$ 항의 조합으로 쓰고, 그 $L$ 항을 다시 $C'$ 으로 앞 항의 조합으로 쓴다. $L+L'\le N$ 이므로 쓰인 항이 모두 $C$ 와 $C'$ 이 함께 맞는 범위 안에 있고, 합의 순서를 바꾸면 $C$ 가 $s_N$ 을 맞게 예측한다는 등식이 나온다. 가정과 어긋난다.

알고리즘은 불일치가 나올 때마다 길이를 정확히 $\max(L,n+1-L)$ 로 맞추므로, 이 정리의 하한을 달성해 각 단계에서 최소 길이를 준다.

## 처음 2L 항의 유일성

선형 복잡도가 $L$ 인 수열에서는 처음 $2L$ 항을 생성하는 길이 $L$ 이하의 점화식이 수열 전체를 생성한다. 그런 $(C,L_C)$ 가 $s_N$ 에서 처음 틀린다고 하면 $N\ge 2L$ 이다. 길이 $L$ 의 참 점화식이 $s_0,\dots,s_N$ 을 생성하므로 길이 정리로 $L\ge N+1-L_C\ge N+1-L$ 이고, $N\le 2L-1$ 이 되어 모순이다.

## 유리함수 근사와의 관계

$S(x)=\sum_{j=0}^{N-1}s_jx^j$ 로 두면 $(C,L)$ 이 수열을 생성하는 것은 차수가 $L$ 보다 작은 다항식 $P$ 가 있어

$$
C(x)S(x)\equiv P(x)\pmod{x^N}
$$

인 것과 동치다. $S$ 를 분모 차수 $L$ 이하의 유리함수 $P/C$ 로 $x^N$ 까지 맞추는 문제이고, $x^N$ 과 $S$ 에 [유클리드 알고리즘](euclidean-algorithm.md)의 확장판을 적용해 나머지의 차수가 $N/2$ 아래로 처음 내려가는 단계에서도 같은 $C$ 가 나온다.

# 활용

- **부호의 복호.** [Reed–Solomon 부호](reed-solomon-codes.md)와 BCH 부호에서 받은 단어의 신드롬 $2t$ 개는 오류 위치의 역수들을 근으로 하는 다항식의 점화식을 만족한다. 이 알고리즘으로 오류 위치 다항식을 구하고, 근을 찾아 오류 자리를 정한다. [오류정정부호](error-correcting-codes.md)에서 이 방법이 표준 복호다.
- **스트림 암호의 분석.** 선형 복잡도가 $L$ 인 키 수열(keystream)은 연속한 $2L$ 비트에서 전체가 복원된다. 그래서 LFSR 하나의 출력을 그대로 쓰는 스트림 암호는 안전하지 않고, 비선형 결합으로 선형 복잡도를 키운다.
- **희소 선형계.** 유한체 위의 큰 희소행렬 $A$ 에서 스칼라 수열 $u^{\mathsf T}A^iv$ 의 최소 점화식을 이 알고리즘으로 구하면 $A$ 의 [최소다항식](minimal-polynomial.md)의 인수가 나오고, 그것으로 $Ax=v$ 를 푼다. 이것이 [Wiedemann 알고리즘](wiedemann-algorithm.md)이다.

[^1]: J. L. Massey, "Shift-register synthesis and BCH decoding", *IEEE Transactions on Information Theory* 15 (1969), 122–127. E. R. Berlekamp, *Algebraic Coding Theory*, McGraw-Hill, 1968, 7 장.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)
- [오류정정부호](error-correcting-codes.md)

## 더 알아보기

- [Wiedemann 알고리즘](wiedemann-algorithm.md)
- [Reed–Solomon 부호](reed-solomon-codes.md)

#algorithms #field_theory #cryptography
