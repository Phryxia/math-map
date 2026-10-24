# 무작위 복잡도 부류

# 개요

**무작위 복잡도 부류(randomized complexity classes)** 는 무작위 비트를 읽는 다항시간 알고리즘이 정해진 오류 확률 아래에서 판정하는 언어들의 부류다. 한쪽 답에서만 틀릴 수 있는 RP(randomized polynomial time)와 coRP, 틀리지 않고 기대 시간만 다항인 ZPP(zero-error probabilistic polynomial time), 양쪽 답에서 $1/3$ 이하의 확률로 틀릴 수 있는 BPP(bounded-error probabilistic polynomial time)가 기본이다.

포함 관계는 $\mathrm P\subseteq\mathrm{ZPP}=\mathrm{RP}\cap\mathrm{coRP}$, $\mathrm{RP}\subseteq\mathrm{NP}\cap\mathrm{BPP}$ 다. [P 대 NP 문제](p-np.md)의 결정적 부류에 무작위성을 더한 것이고, 오류 확률을 반복으로 줄이는 데 [집중부등식](concentration-inequalities.md)을 쓴다.

# 직관

$n\times n$ 정수 행렬 $A,B,C$ 가 주어졌을 때 $AB=C$ 인지 확인하려 한다. $AB$ 를 계산하면 곱셈이 $n^3$ 번 든다. 대신 성분이 $0$ 또는 $1$ 인 벡터 $x$ 를 무작위로 골라 $A(Bx)$ 와 $Cx$ 를 비교하면, 행렬과 벡터의 곱 세 번이라 곱셈이 $3n^2$ 번이다.

$AB=C$ 이면 두 값은 항상 같다. $AB\ne C$ 이면 $D=AB-C$ 에 $0$ 이 아닌 성분 $d_{ij}$ 가 있다. $Dx$ 의 $i$ 번째 성분은 $d_{ij}x_j$ 와 나머지 항의 합이고, 나머지 항을 고정하면 $x_j=0$ 과 $x_j=1$ 가운데 많아야 하나가 합을 $0$ 으로 만든다. 그래서 틀린 $C$ 를 놓칠 확률이 $1/2$ 이하이고, 독립으로 $20$ 번 되풀이하면 $2^{-20}$ 이하다. 이 알고리즘은 "같지 않다" 고 답할 때는 틀리지 않고, 이렇게 한쪽에서만 틀리는 알고리즘이 판정하는 언어의 부류가 RP 다.

# 정의

## 무작위 알고리즘

알고리즘 $M$ 이 입력 $x$ 와 길이 $p(\lvert x\rvert)$ 인 무작위 비트열 $r$ 을 받아 $p(\lvert x\rvert)$ 단계 안에 받아들임이나 거부를 낸다고 하자. $p$ 는 다항식이고 $r$ 은 균등하게 고른다. 확률은 $r$ 에 대해 잰다.

## 네 부류

언어 $L$ 에 대해 다음과 같이 정한다.

| 부류 | x ∈ L 일 때 받아들일 확률 | x ∉ L 일 때 받아들일 확률 |
| --- | --- | --- |
| RP | $1/2$ 이상 | $0$ |
| coRP | $1$ | $1/2$ 이하 |
| BPP | $2/3$ 이상 | $1/3$ 이하 |

- **RP** 는 위 표의 첫 행을 만족하는 다항시간 무작위 알고리즘이 있는 언어의 부류다. **coRP** 는 여집합이 RP 에 드는 언어의 부류다.
- **BPP** 는 셋째 행을 만족하는 알고리즘이 있는 언어의 부류다.
- **ZPP** 는 항상 옳은 답을 내고 기대 실행 시간이 입력 길이의 다항식인 무작위 알고리즘이 있는 언어의 부류다.

틀리지 않고 시간만 무작위인 알고리즘을 Las Vegas 알고리즘(Las Vegas algorithm), 시간이 정해져 있고 틀릴 수 있는 알고리즘을 Monte Carlo 알고리즘(Monte Carlo algorithm)이라 한다.

# 성질

## 오류 줄이기

정리. 정의의 $1/2$ 과 $2/3$ 은 $1/2+1/q(n)$ 꼴의 어느 값으로 바꾸어도, 또는 $1-2^{-q(n)}$ 으로 바꾸어도 같은 부류를 준다. $q$ 는 다항식이다.

증명의 요지. RP 는 $k$ 번 독립으로 돌려 한 번이라도 받아들이면 받아들인다. $x\in L$ 에서 놓칠 확률이 $2^{-k}$ 이하이고 $x\notin L$ 에서는 여전히 $0$ 이다. BPP 는 $k$ 번 돌려 다수결을 따른다. 각 시행이 맞을 확률이 $2/3$ 이상이면 Hoeffding 부등식(Hoeffding's inequality)에 따라 다수결이 틀릴 확률은 $e^{-k/18}$ 이하다.

## ZPP 와 한쪽 오류

정리. $\mathrm{ZPP}=\mathrm{RP}\cap\mathrm{coRP}$ 다.

증명의 요지. $L$ 에 대한 RP 알고리즘과 coRP 알고리즘을 번갈아 돌린다. RP 알고리즘이 받아들이면 $x\in L$ 이 확실하고, coRP 알고리즘이 거부하면 $x\notin L$ 이 확실하다. 한 번에 둘 중 하나가 일어날 확률이 $1/2$ 이상이므로 기대 반복 횟수가 $2$ 이하다. 역으로 기대 시간이 $t(n)$ 인 ZPP 알고리즘을 $2t(n)$ 단계에서 끊고 그때 거부하면, Markov 부등식(Markov's inequality)으로 끊길 확률이 $1/2$ 이하라서 RP 알고리즘이 된다. 끊길 때 받아들이게 하면 coRP 알고리즘이다.

## 포함 관계

- $\mathrm{RP}\subseteq\mathrm{NP}$. 받아들이게 하는 무작위 비트열 $r$ 이 증거다.
- $\mathrm{RP}\subseteq\mathrm{BPP}$. RP 알고리즘을 두 번 돌리면 $x\in L$ 에서 받아들일 확률이 $3/4$ 이상이다.
- BPP 는 여집합에 대해 닫혀 있다. 받아들임과 거부를 바꾸면 표의 두 열이 바뀐다.
- $\mathrm{BPP}\subseteq\mathrm{PSPACE}$. PSPACE 는 다항 공간(polynomial space)으로 판정되는 언어의 부류다. 무작위 비트열을 전부 하나씩 돌려 받아들이는 비율을 센다.

## Adleman 정리

정리. BPP 의 언어는 다항 크기 불 회로의 족으로 판정된다[^1].

증명의 요지. 오류 확률을 $2^{-(n+1)}$ 이하로 줄인다. 길이 $n$ 인 입력 $2^n$ 개 가운데 어느 하나에서라도 틀리게 하는 $r$ 의 비율은 합집합 한계로 $1/2$ 이하이므로, 모든 길이 $n$ 입력에서 옳은 $r_n$ 이 존재한다. $r_n$ 을 회로에 상수로 박아 넣는다.

## 다항 계층과의 관계

정리. BPP 의 언어 $L$ 은 "$\exists y\thinspace\forall z$" 꼴과 "$\forall y\thinspace\exists z$" 꼴의 다항시간 술어로 모두 쓰인다. M. Sipser 와 P. Gács 가 증명했고 C. Lautemann 이 간단히 했다[^2].

증명의 요지는 오류 확률을 충분히 줄인 뒤, $x\in L$ 이면 받아들이게 하는 $r$ 의 집합을 다항 개의 평행이동으로 비트열 전체를 덮을 수 있고 $x\notin L$ 이면 덮을 수 없다는 것이다.

## 비무작위화

R. Impagliazzo 와 A. Wigderson 은 지수 시간 $\mathrm E=\mathrm{DTIME}(2^{O(n)})$ 의 어떤 언어가 크기 $2^{\Omega(n)}$ 미만의 회로로 계산되지 않으면 $\mathrm P=\mathrm{BPP}$ 라는 것을 증명했다[^3]. 회로 하한에서 [유사난수 생성기](pseudorandom-generators.md)를 만들고 그 출력으로 무작위 비트를 대신한다.

# 활용

- 소수 판정. [Miller–Rabin 판정](miller-rabin-test.md)은 합성수를 판정하는 RP 알고리즘이므로 소수 집합은 coRP 에 든다. [AKS 소수 판정법](aks-primality-test.md)은 소수 집합이 P 에 든다는 것을 보였다.
- 다항식 항등 판정. [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)에 따라 산술회로로 주어진 다항식이 영다항식인지 판정하는 문제는 coRP 에 든다. 이 문제의 결정적 다항시간 알고리즘은 알려져 있지 않다[^4].
- 행렬곱 검증. 직관 절의 절차는 R. Freivalds 가 1977 년에 제시했다[^5].
- 양자 계산. [양자 회로](quantum-circuits.md)의 부류 BQP(bounded-error quantum polynomial time)는 BPP 를 포함한다. 고전 무작위 비트를 Hadamard 게이트와 측정으로 만든다.

[^1]: L. Adleman, "Two theorems on random polynomial time", Proceedings of the 19th IEEE Symposium on Foundations of Computer Science (1978), 75–83.
[^2]: M. Sipser, "A complexity theoretic approach to randomness", Proceedings of the 15th ACM Symposium on Theory of Computing (1983), 330–335. C. Lautemann, "BPP and the polynomial hierarchy", Information Processing Letters 17(4) (1983), 215–217.
[^3]: R. Impagliazzo, A. Wigderson, "P = BPP if E requires exponential circuits: derandomizing the XOR lemma", Proceedings of the 29th ACM Symposium on Theory of Computing (1997), 220–229.
[^4]: S. Arora, B. Barak, *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, 7 장.
[^5]: R. Freivalds, "Probabilistic machines can use less running time", Information Processing 77, Proceedings of the IFIP Congress (1977), 839–842.

# 연관 문서

## 선수지식

- [P 대 NP 문제](p-np.md)
- [집중부등식](concentration-inequalities.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complexity #algorithms #probability
