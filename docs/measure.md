# 측도

측도는 정해진 집합들에 길이·넓이·확률 같은 음이 아닌 크기를 일관되게 배정한다.

## 정의

X를 집합, Σ를 X의 부분집합들을 모은 집합이라 하자. Σ가 공집합을 포함하고 여집합과 가산 합집합에 닫혀 있으면 sigma-algebra라 한다. Σ에 속하는 집합을 가측집합이라 부른다.

측도 μ는 가측집합에 0 이상의 확장 실수를 대응시키는 함수다. 무한대도 값으로 허용한다.

$$
\mu:\Sigma\to[0,\infty],\qquad\mu(\varnothing)=0
$$

양의 정수 n으로 인덱싱한 가측집합 Aₙ들이 서로소일 때 가산 가법성을 요구한다.

$$
\mu\left(\bigcup_{n=1}^{\infty}A_n\right)=\sum_{n=1}^{\infty}\mu(A_n)
$$

X, Σ, μ를 함께 지정한 것이 측도 공간이다. 전체 측도가 1이면 확률 공간이다.

## 성질

가측집합 A가 가측집합 B에 포함되면 A의 측도는 B의 측도보다 크지 않다. B를 A와 나머지 부분의 서로소 합으로 나누면 된다.

$$
A\subseteq B\Rightarrow\mu(A)\le\mu(B)
$$

유한 확률 공간은 모든 부분집합을 가측집합으로 삼아 결과별 확률을 더하는 특수한 경우다. 반대로 원소 수를 크기로 삼는 counting measure는 확률로 정규화하지 않은 예다.

실수의 Lebesgue measure는 구간에 그 길이를 배정한다. 한 점의 측도는 0이고, 가산 개의 한 점을 모아도 가산 가법성 때문에 측도는 0이다. 따라서 유리수들은 실수 직선에서 측도 0을 이룬다.

길이가 양수인 구간도 한 점들의 합집합이지만 비가산 합집합이다. 가산 가법성을 비가산 합집합에 그대로 적용할 수 없다.

위상 공간의 열린집합들을 포함하는 가장 작은 sigma-algebra가 Borel sigma-algebra다. 위상은 열린집합을, 측도는 가측집합의 크기를 지정하므로 서로 다른 데이터다.

## 활용

Lebesgue 적분, 연속 확률분포, 거의 모든 점에서 성립하는 성질을 다룬다. 거의 모든 점이라는 말은 예외 집합의 측도가 0이라는 뜻이며 예외 집합이 비어 있다는 뜻은 아니다.

## 기타 참고 문헌

- [Terence Tao, A quick review of measure and integration theory](https://terrytao.wordpress.com/2009/01/01/245b-notes-0-a-quick-review-of-measure-and-integration-theory/comment-page-1/): 가측공간·측도·확률측도와 기본 예시.
- 단조성은 가법성에서, 가산 집합의 영측도성은 한 점의 영측도성과 가산 가법성에서 얻는다. 적분의 정의는 별도 주제로 확장한다.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)
- [위상 공간](topology.md)
- [가산성과 비가산성](cardinality.md)

## 더 알아보기

- [Lebesgue 적분](lebesgue-integral.md)
- [가측함수](measurable-functions.md)
- [상측도와 확률분포](pushforward-measure.md)
- [Radon–Nikodym 정리](radon-nikodym.md)
