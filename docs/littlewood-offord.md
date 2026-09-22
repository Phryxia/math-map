# Littlewood–Offord 문제

# 개요

Littlewood–Offord 문제는 실수 $a_1,\dots,a_n$ 에 부호를 붙여 더한 값이 한 자리에 얼마나 몰릴 수 있는지 묻는다. 계수의 절댓값이 모두 $1$ 이상이면 길이 $2$ 인 구간에 들어가는 부호 선택은 $2^n$ 가지 가운데 $\binom{n}{\lfloor n/2\rfloor}$ 개를 넘지 못한다.

부호 선택을 집합으로 바꾸면 한 구간에 들어가는 선택들이 반사슬을 이루므로 [Sperner 정리](sperner-theorem.md)가 개수를 정한다. 이런 형태의 상한을 반집중 부등식이라 하고, 무작위 행렬이 특이할 확률을 재는 데 쓴다.

# 직관

동전을 $n$ 번 던져 앞면에 $+1$, 뒷면에 $-1$ 을 주고 더한다. 합은 $0$ 근처에 몰리고, 합이 정확히 $0$ 일 확률은 $n$ 이 짝수일 때 $\binom{n}{n/2}/2^n$ 이다. $\pm 1$ 대신 다른 수를 더하면 합을 한 값에 더 몰리게 만들 수 있는가.

$n=3$ 에서 세 수를 $1,1,1$ 로 잡으면 부호를 고르는 $8$ 가지가 주는 합은 $3,1,1,1,-1,-1,-1,-3$ 이다. 값 $1$ 이 세 번, 값 $-1$ 이 세 번 나온다. 세 수를 $1,2,4$ 로 바꾸면 합은 $7,5,3,1,-1,-3,-5,-7$ 이라 여덟 값이 전부 다르고, 어느 값도 두 번 나오지 않는다.

$1,2,4$ 에서 흩어진 이유는 부호 하나를 뒤집을 때 합이 그 수의 두 배만큼 움직이기 때문이다. 같은 값을 여러 번 받으려면 뒤집은 자리들이 서로 상쇄해야 하는데, 수가 커질수록 상쇄할 조합이 줄어든다. 모든 수의 절댓값이 $1$ 이상이라는 조건은 뒤집기 하나가 합을 최소 $2$ 만큼 움직인다는 뜻이다.

부호 선택을 집합으로 바꿔 쓴다. $+1$ 을 준 자리를 모아 $S \subseteq \lbrack n\rbrack$ 이라 하면, 계수가 모두 양수일 때 합은 $S$ 가 커질수록 커진다. $S \subsetneq T$ 이면 두 합의 차이는 $T$ 에만 있는 자리의 계수를 두 배 해서 더한 값이므로 $2$ 이상이다.

그러므로 길이 $2$ 미만인 구간 하나에 합이 들어가는 집합들은 서로 포함관계가 없다. 이런 족의 크기는 Sperner 정리가 $\binom{n}{\lfloor n/2\rfloor}$ 으로 묶는다. 수를 전부 $1$ 로 잡으면 크기가 같은 집합들이 같은 합을 주므로 이 개수가 실제로 나온다.

# 정의

## 부호합과 집중함수

실수 벡터 $a = (a_1,\dots,a_n)$ 과 부호 $\varepsilon \in \lbrace -1,1\rbrace^n$ 에 대해 $\sum_{i=1}^n \varepsilon_i a_i$ 를 **부호합**이라 한다.

$a$ 의 **집중함수**는 길이 $r$ 인 열린 구간 하나에 들어가는 부호합의 최대 개수다.

$$
\rho(a, r) \thinspace=\thinspace \max_{x \in \mathbb R} \char35{}\lbrace \varepsilon \in \lbrace -1,1\rbrace^n \thinspace\mid\thinspace x \lt \sum_{i=1}^n \varepsilon_i a_i \lt x + r \rbrace
$$

부호를 균등하게 고르면 $\rho(a,r)/2^n$ 은 부호합이라는 [확률변수](random-variables.md)가 그 구간에 들어갈 확률의 최댓값이다.

## 문제의 진술

**Littlewood–Offord 문제**는 $\vert a_i\vert \ge 1$ 을 모든 $i$ 에 대해 만족하는 $a$ 위에서 $\rho(a,2)$ 의 최댓값을 정하는 문제다.[^1]

계수의 부호는 문제에 영향을 주지 않는다. $a_i$ 의 부호를 바꾸는 것은 $\varepsilon_i$ 의 부호를 바꾸는 것과 같으므로 $a_i \gt 0$ 을 가정해도 된다.

# 성질

## Erdős 의 상한

**정리**[^2]**.** $\vert a_i\vert \ge 1$ 이면 $\rho(a,2) \le \binom{n}{\lfloor n/2\rfloor}$ 이고, $a_1 = \dots = a_n = 1$ 에서 등호가 성립한다.

$a_i \gt 0$ 으로 두고 부호 $\varepsilon$ 에 $S = \lbrace i : \varepsilon_i = 1\rbrace$ 를 대응한다. 부호합은 $2\sum_{i \in S} a_i - \sum_{i=1}^n a_i$ 이므로 $S \subsetneq T$ 이면 두 부호합의 차이는 $2\sum_{i \in T \setminus S} a_i \ge 2$ 다. 길이 $2$ 인 열린 구간에 들어가는 $S$ 들은 따라서 반사슬을 이루고, Sperner 정리가 그 개수를 $\binom{n}{\lfloor n/2\rfloor}$ 으로 묶는다. ∎

$\binom{n}{\lfloor n/2\rfloor}/2^n$ 은 $\sqrt{2/(\pi n)}$ 과 같은 크기이므로, 확률로 읽으면 상한은 $O(n^{-1/2})$ 다.

## 긴 구간

**정리**[^2]**.** $k$ 가 양의 정수이고 $\vert a_i\vert \ge 1$ 이면 $\rho(a, 2k)$ 는 $\binom{n}{0},\dots,\binom{n}{n}$ 가운데 가장 큰 $k$ 개의 합을 넘지 않는다.

길이 $2k$ 인 구간에 들어가는 집합들은 위 계산에 따라 한 사슬에서 $k$ 개 이하만 나온다. 사슬마다 $k$ 개 이하를 갖는 족의 최대 크기는 중앙의 $k$ 개 계층을 통째로 쓴 것이고, 이는 [Dilworth 정리](dilworth-theorem.md)를 부분집합 [격자](order-lattices.md)의 대칭 사슬 분해에 적용해 얻는다. ∎

## 고차원 계수

**정리**[^3]**.** $a_i$ 가 노름공간의 벡터이고 $\Vert a_i\Vert \ge 1$ 이면, 지름이 $2$ 미만인 집합 하나에 들어가는 부호합의 개수는 $\binom{n}{\lfloor n/2\rfloor}$ 을 넘지 않는다.

실수일 때의 논법은 순서를 쓰므로 그대로 옮겨지지 않는다. Kleitman 은 대신 부분집합 격자의 대칭 사슬 분해를 쓰고, 한 사슬 위의 두 집합이 주는 부호합의 거리가 $2$ 이상임을 노름의 삼각부등식으로 확인한다.

## 서로 다른 계수

계수가 서로 다르면 상한이 더 내려간다. $a_1,\dots,a_n$ 이 서로 다른 정수일 때 한 점에 몰리는 부호합의 개수는 $O(n^{-3/2}) \cdot 2^n$ 크기이고[^4], 최댓값은 계수가 등차수열일 때 나온다.[^5] Stanley 의 증명은 부분집합합의 개수를 $\mathrm{SL}\_2$ 표현의 무게 공간 차원으로 읽고 hard Lefschetz 정리를 쓴다.

# 활용

- 무작위 $\pm 1$ 행렬이 특이할 확률의 상한을 준다. 행렬이 특이하면 어떤 행이 나머지 행의 결합과 같고, 그 결합의 계수를 $a_i$ 로 보면 새 행의 부호합이 한 값에 맞아야 한다. Kahn, Komlós, Szemerédi 가 이 방식으로 확률이 지수적으로 작음을 보였다.[^6]
- 역 Littlewood–Offord 정리는 방향을 뒤집어, 집중함수가 크면 계수 대부분이 짧은 일반화 등차수열에 들어간다고 말한다. Tao 와 Vu 가 이것으로 무작위 이산 행렬의 조건수를 추정했다.[^7]
- [집중부등식](concentration-inequalities.md)과 짝을 이룬다. Hoeffding 부등식은 합이 평균에서 멀리 벗어날 확률의 상한을 주고, 여기의 상한은 합이 한 자리에 몰릴 확률을 막는다.
- [확률적 방법](probabilistic-method.md)에서 무작위 대상이 퇴화하지 않음을 보일 때 쓴다. 부호합이 $0$ 이 될 확률의 상한이 곧 퇴화하지 않는 부호 선택의 존재를 준다.

[^1]: J. E. Littlewood and A. C. Offord, "On the number of real roots of a random algebraic equation. III", *Matematicheskii Sbornik* 12 (1943), 277–286. 무작위 다항식의 실근 개수를 세다가 $\rho(a,2)$ 의 상한 $O(2^n \log n/\sqrt n)$ 을 얻었다.

[^2]: P. Erdős, "On a lemma of Littlewood and Offord", *Bulletin of the American Mathematical Society* 51 (1945), 898–902. Sperner 정리로 로그 인자를 없애고 긴 구간의 경우를 함께 다룬다.

[^3]: D. J. Kleitman, "On a lemma of Littlewood and Offord on the distributions of linear combinations of vectors", *Advances in Mathematics* 5 (1970), 155–157.

[^4]: A. Sárközy and E. Szemerédi, "Über ein Problem von Erdős und Moser", *Acta Arithmetica* 11 (1965), 205–208.

[^5]: R. P. Stanley, "Weyl groups, the hard Lefschetz theorem, and the Sperner property", *SIAM Journal on Algebraic and Discrete Methods* 1 (1980), 168–184.

[^6]: J. Kahn, J. Komlós, and E. Szemerédi, "On the probability that a random $\pm 1$ matrix is singular", *Journal of the American Mathematical Society* 8 (1995), 223–240.

[^7]: T. Tao and V. Vu, "Inverse Littlewood–Offord theorems and the condition number of random discrete matrices", *Annals of Mathematics* 169 (2009), 595–632.

# 연관 문서

## 선수지식

- [Sperner 정리](sperner-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #probability #order_theory
