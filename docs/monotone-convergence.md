# 단조 수렴 정리

단조 수렴 정리는 음이 아닌 가측함수열이 점마다 증가할 때 극한과 Lebesgue 적분을 교환한다.

## 정의

측도 공간 (X,Σ,μ)를 고정하자. 각 자연수 n에 대해 f_n:X→[0,∞]가 가측이고, 모든 x∈X에서 다음 순서가 성립한다고 하자.

$$
0\le f_1(x)\le f_2(x)\le\cdots
$$

점별 극한을 f(x)=\lim_{n\to\infty}f_n(x)로 정의한다. 단조 수렴 정리는 다음 등식을 말한다. 양변에 무한대도 허용한다.

$$
\lim_{n\to\infty}\int_X f_n\,d\mu
=\int_X f\,d\mu
$$

## 성질

적분의 단조성으로 왼쪽 극한은 항상 오른쪽 이하이다. 반대 부등식의 핵심은 f 아래의 음이 아닌 단순함수 s를 하나 고르고, 0<c<1에 대해 f_n이 cs에 도달한 영역들이 증가하여 s의 양수 영역 전체를 덮는다는 점이다. 측도의 아래로부터 연속성을 적용하면 다음 하한을 얻는다.

$$
\lim_{n\to\infty}\int_X f_n\,d\mu\ge c\int_X s\,d\mu
$$

c를 1로 보내고, f 아래의 모든 단순함수 s에 대해 최소 상계를 취하면 반대 부등식이 나온다.

증가하는 가측집합 E_1⊆E_2⊆⋯에 지시함수 f_n=1_{E_n}을 적용하면 측도의 아래로부터 연속성을 얻는다.

$$
\mu\!\left(\bigcup_{n=1}^{\infty}E_n\right)
=\lim_{n\to\infty}\mu(E_n)
$$

단조성 없이 점별 수렴만으로는 결론이 성립하지 않는다. 구간 (0,1]에서 f_n=n1_{(0,1/n)}은 모든 점에서 0으로 수렴하지만 각 적분은 1이다.

## 활용

음이 아닌 함수의 무한급수와 적분을 교환한다. 부분합 F_N=\sum_{n=1}^N g_n은 증가하므로, 각 g_n이 음이 아닌 가측함수이면 다음 Tonelli 등식이 따른다.

$$
\int_X\sum_{n=1}^{\infty}g_n\,d\mu
=\sum_{n=1}^{\infty}\int_X g_n\,d\mu
$$

확률에서는 증가하는 사건의 확률 극한과 음이 아닌 확률변수의 기댓값 근사를 정당화한다.

## 기타 참고 문헌

- [Terence Tao, Integration on abstract measure spaces, and the convergence theorems](https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/): Theorem 14와 Corollary 15.

# 연관 문서

## 선수지식

- [Lebesgue 적분](lebesgue-integral.md)

## 더 알아보기

- [지배 수렴 정리](dominated-convergence.md)

#measure_theory #theorem
