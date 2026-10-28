# Yao 최소최대 원리

# 개요

**Yao 최소최대 원리(Yao's minimax principle)** 는 동전을 던지는 알고리즘의 비용 하한을, 동전을 던지지 않는 알고리즘의 평균 비용으로 구하는 원리다. 무작위 quicksort 는 어떤 입력에서도 비교를 기댓값으로 $2n\ln n$ 번쯤 하는데, 동전을 더 잘 쓰는 다른 정렬 알고리즘이 모든 입력에서 비교를 훨씬 적게 할 수 있는지는 무작위 알고리즘을 하나하나 따져서는 답할 수 없다. 이 원리는 입력 분포 하나를 골라 그 위에서 모든 결정적 알고리즘의 평균 비용을 아래로 묶으면, 그 값이 모든 무작위 알고리즘의 최악 기대 비용의 하한이 됨을 보인다.

# 직관

Yao 최소최대 원리는 무작위 알고리즘이 최악의 입력에서 쓰는 기대 비용이, 어떤 입력 분포를 정해도 그 분포 위에서 가장 좋은 결정적 알고리즘의 평균 비용 이상이라는 정리다. A. C.-C. Yao 가 1977 년에 제시했다[^1].

무작위 알고리즘의 하한을 증명하려면 입력 분포 하나를 골라 결정적 알고리즘의 평균 비용을 아래로 묶으면 된다. 두 값의 최선이 같다는 것은 [Nash 균형](nash-equilibrium.md)에서 다루는 영합 게임에 대한 von Neumann 최소최대 정리(minimax theorem)다.

[무작위 복잡도 부류](randomized-complexity-classes.md)의 알고리즘은 동전을 던져 다음 동작을 고른다. 무작위 quicksort 는 어떤 입력에서도 비교를 기대값으로 $2n\ln n$ 번 정도 한다. 동전을 더 잘 쓰는 다른 무작위 정렬 알고리즘이 모든 입력에서 기대 비교 횟수를 $\log_2 n!$ 보다 훨씬 작게 만들 수 있는지 묻는다.

동전의 결과를 미리 모두 정해 두면 무작위 알고리즘은 결정적 알고리즘 하나가 된다. 그래서 무작위 알고리즘은 결정적 알고리즘들 위의 확률분포다. 이제 입력을 $n!$ 가지 순서 가운데 고르게 뽑는다. [비교 정렬](comparison-sorting.md) 문서의 평균 하한에 따르면 결정적 비교 정렬은 고르게 뽑은 입력에서 평균 $\log_2 n!$ 번 이상 비교한다. 무작위 알고리즘의 평균 비교 횟수는 결정적 알고리즘들의 평균 비교 횟수를 동전의 확률로 섞은 값이므로 역시 $\log_2 n!$ 이상이다. 평균이 그 값 이상이면 그 값 이상인 입력이 있다.

# 정의

입력 크기를 고정하고 입력의 유한집합 $X$ 와 결정적 알고리즘의 유한집합 $\mathcal A$ 를 둔다. $c(a,x)\ge 0$ 은 알고리즘 $a$ 가 입력 $x$ 에서 쓰는 비용, 예컨대 비교 횟수나 질문 횟수다.

- **무작위 알고리즘(randomized algorithm)** $R$ 은 $\mathcal A$ 위의 확률분포다. 입력 $x$ 에서의 기대 비용은 $c(R,x)=\mathbb E_{a\sim R}\thinspace c(a,x)$ 다.
- **입력 분포(input distribution)** $\mu$ 는 $X$ 위의 확률분포다. 결정적 알고리즘 $a$ 의 평균 비용은 $c(a,\mu)=\mathbb E_{x\sim\mu}\thinspace c(a,x)$ 다.

# 성질

## Yao 부등식

정리. 모든 무작위 알고리즘 $R$ 과 모든 입력 분포 $\mu$ 에 대해 다음이 성립한다[^1].

$$
\max_{x\in X}c(R,x)\ge\min_{a\in\mathcal A}c(a,\mu)
$$

증명의 요지. 최댓값은 평균 이상이므로 $\max_x c(R,x)\ge\mathbb E_{x\sim\mu}\mathbb E_{a\sim R}\thinspace c(a,x)$ 다. 두 기댓값의 순서를 바꾸면 $\mathbb E_{a\sim R}\thinspace c(a,\mu)$ 이고, 평균은 최솟값 이상이므로 $\min_a c(a,\mu)$ 이상이다.

## 등식

$c$ 를 행렬로 보면 알고리즘을 고르는 쪽이 비용을 줄이고 입력을 고르는 쪽이 비용을 늘리는 영합 게임이다. von Neumann 최소최대 정리로 다음이 성립한다.

$$
\min_R\max_{x\in X}c(R,x)=\max_\mu\min_{a\in\mathcal A}c(a,\mu)
$$

따라서 입력 분포를 가장 잘 고르면 Yao 부등식의 하한이 무작위 알고리즘의 최적 최악 기대 비용과 같아진다.

## 오류를 허용하는 알고리즘

모든 입력에서 확률 $\varepsilon$ 이하로 틀리는 무작위 알고리즘 $R$ 과 입력 분포 $\mu$ 에 대해 다음이 성립한다.

$$
\max_{x}c(R,x)\ge\frac12\min\lbrace c(a,\mu):a\text{ 가 }\mu\text{ 아래에서 확률 }2\varepsilon\text{ 이하로 틀린다}\rbrace
$$

증명의 요지. $a\sim R$ 의 $\mu$ 아래 오류 확률의 기댓값이 $\varepsilon$ 이하이므로, [집중부등식](concentration-inequalities.md)의 Markov 부등식으로 $a$ 가 오류 $2\varepsilon$ 이하일 확률이 $1/2$ 이상이다. 그런 $a$ 의 평균 비용은 우변의 최솟값의 두 배 이상이므로 $\mathbb E_{a\sim R}\thinspace c(a,\mu)$ 가 우변 이상이고, Yao 부등식의 증명처럼 좌변이 이 기댓값 이상이다.

# 활용

- 비교 정렬. 직관 절의 계산으로 모든 무작위 비교 정렬은 어떤 입력에서 기대 비교 횟수가 $\log_2 n!$ 이상이다. 무작위 quicksort 는 상수 배 안에서 최적이다.
- [통신 복잡도](communication-complexity.md). 무작위 규칙의 통신 하한을 입력 분포 위의 결정적 규칙의 분포 복잡도(distributional complexity)로 증명한다. 서로소 함수의 선형 하한이 이렇게 증명된다.
- 결정 나무. 높이 $h$ 의 완전 이진 AND–OR 나무를 무작위 결정 나무로 평가할 때 읽어야 하는 잎의 기대 수를 M. Saks 와 A. Wigderson 이 이 원리로 구했다[^2].
- 온라인 알고리즘. 캐시 크기 $k$ 의 페이지 교체에서 무작위 알고리즘의 경쟁비가 $H_k=1+\frac12+\cdots+\frac1k$ 이상이라는 하한이 균등한 요청열 분포로 증명된다[^3].

[^1]: A. C.-C. Yao, "Probabilistic computations: toward a unified measure of complexity", Proceedings of the 18th IEEE Symposium on Foundations of Computer Science (1977), 222–227.
[^2]: M. Saks, A. Wigderson, "Probabilistic Boolean decision trees and the complexity of evaluating game trees", Proceedings of the 27th IEEE Symposium on Foundations of Computer Science (1986), 29–38.
[^3]: A. Fiat, R. M. Karp, M. Luby, L. A. McGeoch, D. D. Sleator, N. E. Young, "Competitive paging algorithms", Journal of Algorithms 12(4) (1991), 685–699.

# 연관 문서

## 선수지식

- [Nash 균형](nash-equilibrium.md)
- [무작위 복잡도 부류](randomized-complexity-classes.md)

## 더 알아보기

- [Impagliazzo 하드코어 보조정리](hardcore-lemma.md)

#algorithms #complexity #probability #optimization
