# Borel 추측

# 개요

Borel 추측은 모든 강 측도 영집합이 가산이라는 명제다. [ZFC 공리계](zfc-axioms.md)(Zermelo–Fraenkel with choice)는 이 명제를 결정하지 못한다. [연속체 가설](continuum-hypothesis.md) 아래에서 거짓이고, Laver 가 [강제법](forcing.md)으로 만든 모형에서 참이다.

# 직관

[강 측도 영집합](strong-measure-zero.md)의 예를 모아 보면 가산 집합이 전부다. 가산 집합은 점마다 구간 하나를 배정하면 덮이므로 어떤 열을 주어도 강 측도 영집합이다. 반대쪽에서 Cantor 집합은 측도가 $0$ 이지만 빨리 줄어드는 열 앞에서 덮이지 않아 강 측도 영집합이 아니다. 그러면 비가산이면서 강 측도 영집합인 것이 있는지 묻게 된다.

연속체 가설을 쓰면 만들 수 있다. 실수를 $\aleph_1$ 개로 줄 세우고 제1범주 집합도 $\aleph_1$ 개로 줄 세운 다음, 단계마다 앞서 고른 제1범주 집합들을 피해 점을 하나 고르면 [Luzin 집합](luzin-sierpinski-sets.md)이 나오고 그것이 강 측도 영집합이다. 이 구성은 실수 전체를 $\aleph_1$ 단계로 훑는 데 의존한다. 줄 세우기의 길이가 $\aleph_2$ 이면 단계마다 피해야 할 집합이 이미 비가산 개여서 같은 방법으로는 점을 고를 수 없다.

# 정의

**Borel 추측**(Borel conjecture, BC)은 다음 명제다.

> $X\subseteq\mathbb R$ 이 강 측도 영집합이면 $X$ 는 가산이다.

강 측도 영집합 전체는 $\sigma$ 아이디얼 $\mathcal{SN}$ 을 이루고 가산 집합 전체도 $\sigma$ 아이디얼을 이룬다. 가산 집합은 언제나 강 측도 영집합이므로 BC 는 두 아이디얼이 같다는 진술이다.[^1]

# 성질

## 연속체 가설 아래에서의 반례

**정리.** 연속체 가설은 BC 의 부정을 함의한다.

Luzin 집합은 크기가 $2^{\aleph_0}$ 이고 강 측도 영집합이다. 연속체 가설 아래에서 Luzin 집합이 존재하므로 비가산인 강 측도 영집합이 있다.[^2] ∎

## Laver 모형에서의 무모순성

**정리.** ZFC 가 무모순이면 ZFC $+$ BC 도 무모순이다.[^3]

증명의 요지는 반례를 하나씩 없애는 반복이다. Laver 강제법은 일반적 실수 하나를 더해 바탕 모형의 비가산 집합이 새 모형에서 강 측도 영집합이 아니게 만든다. 이것을 가산지지로 $\omega_2$ 번 반복하면 최종 모형의 모든 비가산 집합은 어느 중간 단계에 이미 나타나 있고 그 뒤의 반복이 그 집합을 없앤다. 가산지지 반복이 $\aleph_1$ 을 보존하므로 "비가산" 의 뜻이 단계마다 바뀌지 않고, 최종 모형에서 $2^{\aleph_0}=\aleph_2$ 다.

BC 가 연속체 가설을 반증하므로 이 모형에서 연속체는 $\aleph_1$ 보다 크다.

## 기수 불변량으로의 번역

$\mathcal{SN}$ 의 균등성 $\mathrm{non}(\mathcal{SN})$ 은 강 측도 영집합이 아닌 집합의 최소 크기다. BC 는 크기 $\aleph_1$ 인 집합이 이미 강 측도 영집합이 아니라는 말이므로

$$
\mathrm{BC} \thickspace\Longleftrightarrow\thickspace \mathrm{non}(\mathcal{SN}) = \aleph_1
$$

이다. 이 등식이 BC 를 [기수 불변량](cardinal-characteristics.md)의 값 하나로 바꾸어 다른 불변량과 견줄 수 있게 한다.[^1]

# 활용

- 강제법 반복의 보존 논법에서 표준 예로 쓰인다. 한 단계가 없애는 것을 반복 전체가 다시 만들지 않는다는 보존 정리가 필요하고, 가산지지 반복의 보존 정리들이 이 증명에서 정비되었다.[^3]
- 강 측도 영집합의 덧셈 특징(모든 제1범주 집합 $M$ 에 대해 $X+M\neq\mathbb R$)이 [Baire 범주](baire-category.md)만으로 쓰이므로, BC 를 국소콤팩트 위상군에서 그대로 물을 수 있다.
- $\mathcal{SN}$ 과 측도 영집합 아이디얼, 제1범주 아이디얼의 관계를 재는 자리에서 BC 가 한쪽 끝의 값을 고정한다.

[^1]: T. Bartoszyński, H. Judah, *Set Theory: On the Structure of the Real Line*, A K Peters, 1995. 8 장이 $\mathcal{SN}$ 과 기수 불변량의 관계를 다룬다.
[^2]: É. Borel, *Sur la classification des ensembles de mesure nulle*, Bull. Soc. Math. France **47** (1919), 97–125. 추측이 제기된 문헌이다.
[^3]: R. Laver, *On the consistency of Borel's conjecture*, Acta Math. **137** (1976), 151–169.

# 연관 문서

## 선수지식

- [강 측도 영집합](strong-measure-zero.md)
- [강제법](forcing.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #measure_theory #logic
