# Bravyi–Kitaev 변환

# 개요

**Bravyi–Kitaev 변환(Bravyi–Kitaev transformation)** 은 페르미온 모드의 연산자를 큐비트의 Pauli 행렬의 곱으로 적되, 한 연산자가 건드리는 큐비트 수를 모드 수의 로그로 줄인 대응이다. 모드가 $N$ 개인 분자의 해밀토니언을 [Jordan–Wigner 변환](jordan-wigner-transformation.md)으로 옮기면 $N$ 번째 모드의 연산자 하나가 큐비트 $N$ 개 전부에 작용하고, 큐비트가 많이 걸린 항일수록 회로가 길어진다. 이 변환은 큐비트마다 점유수 하나 대신 길이가 $2$ 의 거듭제곱인 구간의 점유수 합을 저장해, 각 연산자가 큐비트 $O(\log N)$ 개에만 작용하게 만든다.

# 직관

모드 $j$ 의 연산자가 하는 일은 둘이다. 모드 $j$ 의 점유수 $n_j$ 를 뒤집고, 앞 모드들의 점유수 합 $n_1+\dots+n_{j-1}$ 의 홀짝으로 부호를 정한다. Jordan–Wigner 변환은 큐비트 $j$ 에 $n_j$ 를 저장한다. 뒤집기는 큐비트 하나로 되지만 홀짝을 읽으려면 큐비트 $1,\dots,j-1$ 의 $Z$ 가 모두 필요하다.

반대로 큐비트 $j$ 에 홀짝 $n_1+\dots+n_j$ 를 저장하면 앞 모드의 홀짝은 큐비트 $j-1$ 하나로 읽힌다. 그런데 $n_j$ 를 뒤집으면 큐비트 $j,j+1,\dots,N$ 의 값이 모두 바뀐다. 한쪽 일을 큐비트 하나로 줄이면 다른 쪽 일이 큐비트 $N$ 개로 늘어난다.

두 저장법의 중간을 쓴다. $N=8$ 에서 큐비트 $1,\dots,8$ 에 다음 구간의 점유수 합을 $2$ 로 나눈 나머지로 저장한다.

| 큐비트 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 저장하는 모드 | 1 | 1–2 | 3 | 1–4 | 5 | 5–6 | 7 | 1–8 |

$n_1+\dots+n_7$ 의 홀짝은 큐비트 $4$, $6$, $7$ 의 값을 더하면 나온다. $n_3$ 을 뒤집으면 모드 $3$ 을 포함하는 구간의 큐비트 $3$, $4$, $8$ 만 바뀐다. 어느 모드에서나 읽는 큐비트와 바뀌는 큐비트가 $\log_2 8=3$ 개 안팎이다.

# 정의

## 구간 저장

$i\ge 1$ 을 이진수로 쓸 때 가장 낮은 자리의 $1$ 이 나타내는 수를 $\ell(i)$ 라 한다. $\ell(6)=2$, $\ell(8)=8$ 이다. 점유수 $n_1,\dots,n_N$ 을 다음 값으로 큐비트에 저장하는 것을 **Bravyi–Kitaev 부호화(Bravyi–Kitaev encoding)** 라 한다[^1].

$$
b_i=\sum_{k=i-\ell(i)+1}^{i}n_k\pmod 2
$$

직관 절의 표가 $N=8$ 의 경우다. 이 구간 배치는 누적합을 저장하는 자료구조인 Fenwick 나무(Fenwick tree)와 같다.

## 세 집합

모드 $j$ 에 대해 다음 세 집합을 정한다.

- 갱신 집합 $U(j)$. $j$ 에서 시작해 $i\mapsto i+\ell(i)$ 를 되풀이하여 얻는 $N$ 이하의 수에서 $j$ 를 뺀 것. 모드 $j$ 를 포함하는 구간을 저장하는 큐비트 가운데 $j$ 가 아닌 것이다.
- 홀짝 집합 $P(j)$. $j-1$ 에서 시작해 $i\mapsto i-\ell(i)$ 를 $0$ 이 될 때까지 되풀이하여 얻는 수. 이 큐비트들의 합이 $n_1+\dots+n_{j-1}$ 이다.
- 나머지 집합 $R(j)$. $j-\ell(j)$ 에서 시작해 같은 되풀이로 얻는 수. 이 큐비트들에 $b_j$ 를 더하면 $n_1+\dots+n_j$ 다.

$N=8$ 이면 $U(3)=\lbrace 4,8\rbrace$, $P(8)=\lbrace 7,6,4\rbrace$, $R(6)=\lbrace 4\rbrace$ 이고 $R(8)$ 은 공집합이다.

```typescript
const low = (i: number) => i & -i;

function updateSet(j: number, N: number): number[] {
  const s: number[] = [];
  for (let i = j + low(j); i <= N; i += low(i)) s.push(i);
  return s;
}

function paritySet(j: number): number[] {
  const s: number[] = [];
  for (let i = j - 1; i > 0; i -= low(i)) s.push(i);
  return s;
}

function remainderSet(j: number): number[] {
  const s: number[] = [];
  for (let i = j - low(j); i > 0; i -= low(i)) s.push(i);
  return s;
}
```

## 변환

Jordan–Wigner 변환 문서의 Majorana 연산자 $c_{2j-1}=a_j+a_j^\dagger$, $c_{2j}=i(a_j^\dagger-a_j)$ 를 다음 Pauli 곱으로 적는 대응을 **Bravyi–Kitaev 변환** 이라 한다.

$$
c_{2j-1}=X_{U(j)}\thinspace X_j\thinspace Z_{P(j)},\qquad c_{2j}=X_{U(j)}\thinspace Y_j\thinspace Z_{R(j)}
$$

$X_S$ 는 집합 $S$ 의 큐비트마다 $X$ 를 곱한 것이고 $Z_S$ 도 같다. $X_{U(j)}X_j$ 가 모드 $j$ 를 포함하는 구간의 큐비트를 뒤집고, $Z_{P(j)}$ 가 앞 모드의 홀짝으로 부호를 정한다. $N=8$ 의 모드 $8$ 이면 $c_{15}=X_8Z_4Z_6Z_7$ 이고, Jordan–Wigner 변환의 $Z_1\cdots Z_7X_8$ 은 큐비트 $8$ 개에, 이 연산자는 $4$ 개에 작용한다.

# 성질

## 반교환 관계

정리. 위의 $c_1,\dots,c_{2N}$ 은 $\lbrace c_p,c_q\rbrace=2\delta_{pq}I$ 를 만족한다.

증명의 요지. 계산 기저에서 점유수 $n$ 을 부호화 $b$ 로 보내는 치환 행렬을 $W$ 라 하면, 각 $c_p$ 는 Jordan–Wigner 변환의 같은 Majorana 연산자를 $W$ 로 켤레한 것이다. $c_{2j-1}$ 은 $n_j$ 를 뒤집고 부호 $(-1)^{n_1+\dots+n_{j-1}}$ 을 곱하는데, $n_j$ 를 뒤집는 것이 부호화에서 $\lbrace j\rbrace\cup U(j)$ 의 큐비트를 뒤집는 것이고 부호가 $P(j)$ 의 $Z$ 로 읽힌다. $c_{2j}$ 는 부호가 $(-1)^{n_1+\dots+n_j}$ 이므로 $Z_jZ_{R(j)}$ 로 읽히고, $iX_jZ_j=Y_j$ 에서 위의 꼴이 된다. 켤레는 반교환 관계를 보존한다.

## 연산자의 무게

$U(j)$ 의 원소는 $i\mapsto i+\ell(i)$ 를 할 때마다 $\ell(i)$ 가 두 배 이상이 되므로 $\log_2N$ 개 이하다. $P(j)$ 와 $R(j)$ 는 $i\mapsto i-\ell(i)$ 가 이진 자리의 $1$ 을 하나씩 지우므로 $\log_2N$ 개 이하다. 따라서 각 $c_p$ 는 큐비트 $O(\log N)$ 개에 작용하고, 모드 둘이나 넷의 곱인 해밀토니언 항도 큐비트 $O(\log N)$ 개에 작용한다. Jordan–Wigner 변환에서는 같은 항이 $O(N)$ 개에 작용한다.

## 수 연산자

$F(j)=P(j)\setminus R(j)$ 로 두면 다음이 성립한다.

$$
n_j=a_j^\dagger a_j=\tfrac12\bigl(I-Z_jZ_{F(j)}\bigr)
$$

$n_j$ 는 $b_j$ 에서 구간 안쪽의 다른 큐비트 $F(j)$ 의 값을 뺀 것이다. $j$ 가 홀수이면 $F(j)$ 가 공집합이라 Jordan–Wigner 변환과 같은 $\frac12(I-Z_j)$ 다.

# 활용

- 양자 화학 시뮬레이션. 분자 궤도 $N$ 개의 전자 해밀토니언을 이 변환으로 옮기면 항마다의 Pauli 무게가 $O(\log N)$ 이고, [해밀토니언 시뮬레이션](hamiltonian-simulation.md)의 Trotter 단계마다 회로 깊이가 줄어든다[^2].
- [변분 양자 고유값 풀이](variational-quantum-eigensolver.md). 에너지를 Pauli 항별 측정으로 추정할 때 항의 무게가 작으면 측정 회로가 짧다.
- 모드 배치와의 비교. 한 줄로 놓인 모드에서 이웃끼리만 이동하는 해밀토니언은 Jordan–Wigner 변환으로 무게 $2$ 가 되므로, 이 변환이 줄이는 것은 멀리 떨어진 모드 사이의 항이다.

[^1]: S. B. Bravyi, A. Yu. Kitaev, Fermionic quantum computation, *Annals of Physics* 298 (2002), 210–226.
[^2]: J. T. Seeley, M. J. Richard, P. J. Love, The Bravyi–Kitaev transformation for quantum computation of electronic structure, *Journal of Chemical Physics* 137 (2012), 224109.

# 연관 문서

## 선수지식

- [Jordan–Wigner 변환](jordan-wigner-transformation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#computation #linear_algebra #algorithms
