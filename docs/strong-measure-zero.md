# 강 측도 영집합

# 개요

강 측도 영집합은 구간의 길이를 미리 정해 주어도 그 길이대로 덮을 수 있는 실수 집합이다. Lebesgue [측도](measure.md)가 $0$ 인 집합은 길이의 합만 작으면 되므로 조건이 더 약하다.

가산 집합은 강 측도 영집합이고, Cantor 집합은 측도가 $0$ 이지만 강 측도 영집합이 아니다.

# 직관

$\lbrack 0,1\rbrack$ 안의 유리수를 덮을 때 $n$ 번째 유리수에 길이 $\varepsilon/2^n$ 인 구간을 주면 길이의 합이 $\varepsilon$ 이다. 여기서 구간의 길이를 내가 정했다. 길이를 남이 정해 주면 어떻게 되는지 본다.

양수열 $\varepsilon\_1,\varepsilon\_2,\dots$ 를 남이 준다. 유리수를 $q\_1,q\_2,\dots$ 로 줄 세우고 $q\_n$ 에 길이 $\varepsilon\_n$ 인 구간을 주면 모든 유리수가 덮인다. 길이가 무엇이든 유리수 하나에 구간 하나씩 돌아가므로 덮는 데 문제가 없다.

Cantor 집합에서는 같은 방법이 막힌다. Cantor 집합은 비가산이라 점마다 구간을 하나씩 줄 수 없고, 구간 하나가 여러 점을 한꺼번에 덮어야 한다. $\varepsilon\_n=3^{-n}/n$ 처럼 빨리 줄어드는 열을 주면 $n$ 번째 구간이 Cantor 집합의 $n$ 단계 조각 하나보다 짧아 그 조각을 덮지 못한다. 구간 $n$ 개로는 $n$ 단계 조각 $2^n$ 개를 감당할 수 없다.

덮을 수 있는 쪽과 없는 쪽을 가르는 것은 길이의 합이 아니라 주어진 열에 맞춰 구간을 배치할 수 있는지다. Cantor 집합은 길이의 합을 얼마든지 작게 하여 덮을 수 있으므로 측도가 $0$ 이고, 그래도 위의 열에는 맞출 수 없다.

# 정의

$X\subseteq\mathbb R$ 이 **강 측도 영집합**이라 함은 모든 양수열 $(\varepsilon\_n)\_{n\ge1}$ 에 대해 구간열 $(I\_n)$ 이 있어

$$
X\subseteq\bigcup\_{n\ge1}I\_n, \qquad \lvert I\_n\rvert\le\varepsilon\_n
$$

을 만족하는 것이다. 여기서 $\lvert I\rvert$ 는 구간 $I$ 의 길이다.

Lebesgue 측도가 $0$ 이라는 조건은 각 $\varepsilon\gt 0$ 에 대해 길이의 합이 $\varepsilon$ 이하인 덮개가 있다는 것이고, 개별 구간의 길이를 지정하지 않는다.

# 성질

## 측도 영집합과의 관계

**정리.** 강 측도 영집합은 측도가 $0$ 이고, 그 역은 성립하지 않는다.

$\varepsilon\_n=\varepsilon/2^n$ 을 주면 얻는 덮개의 길이 합이 $\varepsilon$ 이하이므로 측도가 $0$ 이다. 역의 반례가 Cantor 집합이다. Cantor 집합은 측도가 $0$ 이지만, 빨리 줄어드는 열을 주면 $n$ 번째 구간이 $n$ 단계 조각보다 짧아 덮지 못한다.[^1] ∎

## 가산 합집합과 부분집합

강 측도 영집합의 부분집합은 강 측도 영집합이고, 강 측도 영집합을 가산 개 합쳐도 강 측도 영집합이다. 합집합 쪽은 주어진 열 $(\varepsilon\_n)$ 을 가산 개의 부분열로 쪼개 각 집합에 하나씩 배정해 얻는다. 가산 집합은 점마다 구간 하나를 주면 되므로 강 측도 영집합이다.

## Galvin–Mycielski–Solovay 정리

**정리.** $X\subseteq\mathbb R$ 이 강 측도 영집합일 필요충분조건은 모든 제1범주 집합 $M$ 에 대해 $X+M\neq\mathbb R$ 인 것이다.[^2]

측도로 쓴 조건이 덧셈과 [Baire 범주](baire-category.md)만으로 다시 쓰인다. 이 형태는 위상군에서 그대로 정의가 되어 강 측도 영집합의 개념이 국소콤팩트 위상군으로 옮겨진다.

## Borel 추측

모든 강 측도 영집합이 가산이라는 명제를 **Borel 추측**이라 한다. 연속체 가설 아래에서는 거짓이다. [Luzin 집합](luzin-sierpinski-sets.md)이 비가산이면서 강 측도 영집합이기 때문이다. Laver 는 가산지지 반복 강제법으로 Borel 추측이 [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)와 무모순임을 보였다.[^3]

# 활용

- 측도가 $0$ 인 집합을 더 잘게 가르는 데 쓴다. Cantor 집합과 가산 집합은 둘 다 측도가 $0$ 이지만 강 측도 영집합인지에서 갈린다.
- [Luzin 집합과 Sierpiński 집합](luzin-sierpinski-sets.md)의 성질을 진술한다. Luzin 집합이 강 측도 영집합이라는 정리가 Borel 추측을 연속체 가설 아래에서 반증한다.
- 덮개의 크기를 미리 지정하는 이 형태가 $\sigma$ 아이디얼의 [기수 불변량](cardinal-characteristics.md)에서 별도의 아이디얼을 이룬다.

[^1]: John C. Oxtoby, *Measure and Category*, Springer Graduate Texts in Mathematics 2 (1980), 3장. 강 측도 영집합의 정의와 Cantor 집합이 그 예가 아님을 다룬다.

[^2]: F. Galvin, J. Mycielski, R. Solovay, "Strong measure zero sets", *Notices of the American Mathematical Society* 26 (1979), A-280. 덧셈으로 쓴 특징이 이 결과다.

[^3]: Richard Laver, "On the consistency of Borel's conjecture", *Acta Mathematica* 137 (1976), 151–169. Borel 추측이 ZFC 와 무모순임을 반복 강제법으로 보인 논문이다.

# 연관 문서

## 선수지식

- [측도](measure.md)

## 더 알아보기

아직 연결한 문서가 없다.

#measure_theory #set_theory #logic
